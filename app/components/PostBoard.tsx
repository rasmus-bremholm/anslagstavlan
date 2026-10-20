"use client";
import type { Post } from "@/lib/types";
import FeaturedPost from "@/app/components/FeaturedPost";
import LatestPostsList from "@/app/components/LatestPostsList";
import { useEffect, useState } from "react";

const ROTATE_MS = 20000;

interface PostBoardProps {
	posts: Post[];
}

export default function PostBoard({ posts }: PostBoardProps) {
	const [index, setIndex] = useState(0);

	// index in deps: clicking a dot restarts the timer
	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % posts.length), ROTATE_MS);
		return () => clearInterval(id);
	}, [index, posts.length]);

	return (
		<>
			<FeaturedPost posts={posts} index={index} onSelect={setIndex} />
			<div>
				<h3 className='text-xl font-bold text-muted uppercase'>senast upplagt</h3>
				<LatestPostsList posts={posts.filter((_, i) => i !== index)} />
			</div>
		</>
	);
}
