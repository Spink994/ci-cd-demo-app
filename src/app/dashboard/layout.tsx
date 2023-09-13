'use client';
import { Suspense } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import AuthCheck from '@/components/AuthCheck';

export default function CustomLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex">
			<AuthCheck>
				<aside className="flex sticky top-0 h-screen bg-white">
					<Sidebar />
				</aside>
				<div className="flex flex-1 flex-col">
					<TopNavbar />
					<div className="flex w-full bg-white/95">
						<Suspense fallback={null}>{children}</Suspense>
					</div>
				</div>
			</AuthCheck>
		</main>
	);
}
