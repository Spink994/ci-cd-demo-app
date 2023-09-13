'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	// Checking if the user is navigating to the dashboard
	const isDashboardRoute = pathname.includes('/dashboard');
	// Fetching the token from the localstorage
	const getToken =
		typeof localStorage !== 'undefined' &&
		localStorage.getItem('spinkodes-token');

	/* If the user has a token and the route is a dashboard route, the isAuthenticated returns true else it returns false */
	const isAuthenticated =
		isDashboardRoute && typeof getToken !== 'string'
			? false
			: isDashboardRoute && typeof getToken === 'string'
			? true
			: false;

	/** If the isAuthenticated value returns true, the user is routed to the dashboard else the user sees a different page
	 *  with the option to go and login
	 */
	return (
		<>
			{isAuthenticated ? (
				children
			) : (
				<div className="w-screen h-screen flex flex-col gap-2 items-center justify-center">
					<span className="text-sm font-semibold">
						You are not authenticated!
					</span>
					<Link
						className="p-3 bg-[#00DC86] flex justify-center px-8 min-w-[150px] text-white font-semibold rounded"
						href="/auth/login"
					>
						Login
					</Link>
				</div>
			)}
		</>
	);
}
