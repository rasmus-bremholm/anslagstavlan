"use client";
import type { Post } from "@/lib/types";

export default function FeaturedPost(posts: Post[]) {
	const index = 0;

	return (
		<div>
			<div className="relative">
            <div className="absolute top-0"></div>
				<h2>{posts[index].title}</h2>

			</div>
		</div>
	);
}
