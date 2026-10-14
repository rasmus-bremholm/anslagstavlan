export default function Home() {
	return (
		<main className='flex-1 px-16'>
			<header className='flex items-center justify-between py-16'>
				<div>
					<h1>Anslagstavlan</h1>
					<p className='text-2xl text-muted'>Låna, byt eller hitta gruppen till ditt projekt.</p>
				</div>
				<div>
					<h2>10:11</h2>
					<p className='text-2xl text-muted'>Torsdag 15 Oktober</p>
				</div>
			</header>
			<div id='content' className='grid grid-cols-2 gap-8'>
				<div>Hej{/* Featrured Item */}</div>
				<div>
					<h3 className='text-xl font-bold text-muted uppercase'>senast upplagt</h3>
					{/* Item List */}
				</div>
			</div>
		</main>
	);
}
