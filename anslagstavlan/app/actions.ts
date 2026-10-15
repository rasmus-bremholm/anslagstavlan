"use server";

import { updateTag } from "next/cache";
import { sql } from "@/lib/db";

const CATEGORIES = ["Låna & byta", "Grupparbete", "Köp, sälj & skänk"];

// Trust boundary: everything in formData is user input.
function readPost(formData: FormData) {
	const title = String(formData.get("title") ?? "").trim();
	const description = String(formData.get("description") ?? "").trim();
	const name = String(formData.get("name") ?? "").trim() || "Anonym";
	const category = String(formData.get("category") ?? "");
	if (!title || title.length > 120) throw new Error("Ogiltig titel");
	if (!description || description.length > 2000) throw new Error("Ogiltig beskrivning");
	if (name.length > 80) throw new Error("Ogiltigt namn");
	if (!CATEGORIES.includes(category)) throw new Error("Ogiltig kategori");
	return { title, description, name, category };
}

// Create post
export async function createPost(formData: FormData) {
	const p = readPost(formData);
	const [row] = await sql`
		INSERT INTO anslagstavlan_posts (title, description, name, category, status)
		VALUES (${p.title}, ${p.description}, ${p.name}, ${p.category}, 'approved')
		RETURNING id`;
	updateTag("posts");
	return row.id as number;
}

// Update post
export async function updatePost(id: number, formData: FormData) {
	const p = readPost(formData);
	await sql`
		UPDATE anslagstavlan_posts
		SET title = ${p.title}, description = ${p.description}, name = ${p.name}, category = ${p.category}
		WHERE id = ${id}`;
	updateTag("posts");
}

// Delete post (soft: keeps the row for moderation)
export async function deletePost(id: number) {
	await sql`UPDATE anslagstavlan_posts SET status = 'removed' WHERE id = ${id}`;
	updateTag("posts");
}

// Anmäl: flag for review, stays visible
export async function reportPost(id: number) {
	await sql`UPDATE anslagstavlan_posts SET status = 'pending' WHERE id = ${id} AND status = 'approved'`;
	updateTag("posts");
}
