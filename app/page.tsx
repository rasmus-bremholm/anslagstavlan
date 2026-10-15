import Clock from "./components/Clock";
import { getPost, getPosts } from "@/lib/posts";
import FeaturedPost from "./components/FeaturedPost";

export default async function Home() {
	const posts = await getPosts(10);
	const latest = posts.slice(0, 5);
	const featuredPost = posts.length > 5 ? posts.slice(5) : posts;

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
				{posts && <FeaturedPost posts={posts} />}
				<div>
					<h3 className='text-xl font-bold text-muted uppercase'>senast upplagt</h3>
					{/* Item List */}
				</div>
			</div>
		</main>
	);
}
