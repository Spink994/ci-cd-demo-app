'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<main className="flex min-h-screen flex-col items-center bg-black py-8">
			<h1 className="text-white font-bold tracking-tight text-[40px] font-[inherit]">
				Welcome to Spinkodes
			</h1>

			{/* Choose an option */}
			<h2 className="mt-auto text-white text-2xl font-bold">
				Select an option!
			</h2>
			<div className="min-h-[400px] max-w-[300px] w-full mt-12 flex flex-col gap-4">
				<button
					onClick={() => router.push('/auth/login')}
					className="text-white bg-transparent border hover:bg-white/30 active:scale-[1.01] transition-all border-white max-w-[300px] p-3 rounded"
				>
					Sign In
				</button>
				<button
					onClick={() => router.push('/auth/register')}
					className="bg-white transition-opacity hover:opacity-70 active:scale-[1.01] text-black max-w-[300px] p-3 rounded"
				>
					Sign Up
				</button>
			</div>
		</main>
	);
}
