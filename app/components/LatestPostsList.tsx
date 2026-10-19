import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";

interface LatestPostsListProps {
	posts: Post[];
}

export default async function LatestPostsList({ posts }: LatestPostsListProps) {
	if (!posts) {
		return null;
	}

	return (
		<>
			{posts.map((p, index) => (
				<div key={p.id} className='bg-paper p-6'>
					<div className='flex align-center justify-between'>
						<div>{p.category}</div>
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
