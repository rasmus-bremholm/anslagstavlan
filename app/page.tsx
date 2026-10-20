import Clock from "./components/Clock";
import { getPosts } from "@/lib/posts";
import PostBoard from "@/app/components/PostBoard";

export default async function Home() {
	const posts = await getPosts(6);

	return (
		<main className='flex-1 px-16'>
			<header className='flex items-center justify-between py-16'>
				<div>
					<h1>Anslagstavlan</h1>
					<p className='text-2xl text-muted'>Låna, byt eller hitta gruppen till ditt projekt.</p>
				</div>
				<div>
					<Clock />
				</div>
			</header>
			<div id='content' className='grid grid-cols-2 gap-8'>
				{posts.length > 0 && <PostBoard posts={posts} />}
			</div>
		</main>
	);
}
