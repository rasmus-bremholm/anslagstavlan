import { categoryColor } from "@/lib/categories";
import { Post } from "@/lib/types";

interface LatestPostsListProps {
	posts: Post[];
}

export default function LatestPostsList({ posts }: LatestPostsListProps) {
	return (
		<>
			{posts.map((p) => (
				<div key={p.id} className='bg-paper p-6 odd:-rotate-1 even:rotate-1'>
					<div className='flex items-center justify-between'>
						<div className={`px-4 py-1.5 mb-2 text-sm font-bold text-paper ${categoryColor(p.category)}`}>{p.category}</div>
						Hejsan
					</div>
					<div>
						<h4>{p.title}</h4>
					</div>
				</div>
			))}
		</>
	);
}
