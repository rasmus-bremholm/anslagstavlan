import type { Post } from "@/lib/types";
import TimeAgo from "@/app/components/TimeAgo";
import { categoryColor } from "@/lib/categories";

interface FeaturedPostProps {
	posts: Post[];
	index: number;
	onSelect: (i: number) => void;
}

export default function FeaturedPost({ posts, index, onSelect }: FeaturedPostProps) {
	const post = posts[index];
	if (!post) return null;

	return (
		<div className='px-2 pt-4'>
			<article className='relative rotate-[-1.2deg] rounded-note bg-paper p-8 shadow-note lg:p-14'>
				<span className={`absolute -top-4 left-8 rotate-2 px-4 py-1.5 text-sm font-bold text-paper ${categoryColor(post.category)}`}>
					{post.category}
				</span>

				<h2 className='text-[clamp(2rem,4.5vw,5.25rem)] leading-[1.05]'>{post.title}</h2>
				<p className='mt-4 text-[clamp(1rem,1.6vw,2.4rem)] text-muted'>{post.description}</p>

				<footer className='mt-8 flex items-center justify-between gap-4 border-t border-dashed border-line-dashed pt-4 text-[clamp(0.875rem,1.2vw,1.9rem)]'>
					<strong className='text-ink'>{post.name}</strong>
					<TimeAgo date={post.created_at} />
				</footer>
			</article>
			<div className='flex items-center mt-8 gap-2'>
				{posts.map((post, i) => (
					<div onClick={() => onSelect(i)} className={`bg-ink rounded-full h-3 w-5 ${i === index ? "" : "opacity-30"}`} key={post.id} />
				))}
			</div>
		</div>
	);
}
