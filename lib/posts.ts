// collection of hooks for fetching
import { sql } from "./db";
import { cacheTag, cacheLife } from "next/cache";
import type { Post } from "./types";

// Posts go live immediately (spec), so everything except removed is visible.
export async function getPosts(limit = 50): Promise<Post[]> {
	"use cache";
	cacheTag("posts");
	cacheLife("minutes");
	const rows = await sql`
		SELECT id, title, description, name, category, status, created_at
		FROM anslagstavlan_posts
		WHERE status <> 'removed'
		ORDER BY created_at DESC
		LIMIT ${limit}`;
	return rows as Post[];
}

export async function getPost(id: number): Promise<Post | null> {
	"use cache";
	cacheTag("posts", `post-${id}`);
	cacheLife("minutes");
	const rows = await sql`
		SELECT id, title, description, name, category, status, created_at
		FROM anslagstavlan_posts
		WHERE id = ${id} AND status <> 'removed'`;
	return (rows[0] as Post) ?? null;
}
