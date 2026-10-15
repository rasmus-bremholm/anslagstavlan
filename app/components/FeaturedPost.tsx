"use client";
import type { Post } from "@/lib/types";

interface FeaturedPostProps {
	posts: Post[];
}

// ponytail: category strings assumed to match the DB values, unknown ones fall back to orange
const tapeColor: Record<string, string> = {
	"Låna & byta": "bg-cat-lana",
	Grupparbete: "bg-cat-grupp",
};

const rtf = new Intl.RelativeTimeFormat("sv", { numeric: "auto" });

function timeAgo(date: Date): string {
	const minutes = Math.round((new Date(date).getTime() - Date.now()) / 60000);
	if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
	if (Math.abs(minutes) < 1440) return rtf.format(Math.round(minutes / 60), "hour");
	return rtf.format(Math.round(minutes / 1440), "day");
}

export default function FeaturedPost({ posts }: FeaturedPostProps) {
	const post = posts[0];
	if (!post) return null;

	return (
		<div className='px-2 pt-4'>
			<article className='relative rotate-[-1.2deg] rounded-note bg-paper p-8 shadow-note lg:p-14'>
				<span className={`absolute -top-4 left-8 rotate-2 px-4 py-1.5 text-sm font-bold text-ink ${tapeColor[post.category] ?? "bg-cat-kop"}`}>{post.category}</span>

				<h2 className='text-[clamp(2rem,4.5vw,5.25rem)] leading-[1.05]'>{post.title}</h2>
				<p className='mt-4 text-[clamp(1rem,1.6vw,2.4rem)] text-muted'>{post.description}</p>

				<footer className='mt-8 flex items-center justify-between gap-4 border-t border-dashed border-line-dashed pt-4 text-[clamp(0.875rem,1.2vw,1.9rem)]'>
					<strong className='text-ink'>{post.name}</strong>
					<span className='text-muted-2'>{timeAgo(post.created_at)}</span>
				</footer>
			</article>
		</div>
	);
}
