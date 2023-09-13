'use client';

import Login from '@/components/Login';
import Register from '@/components/Register';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

type RouteType = 'login' | 'register' | null;

/**
 * Note: while implementing your login logic, make sure to store the token in the localstorage
 * as soon as the response comes - for example -
 *
 * const response = await fetch("/api/login", {loginData}) - (a POST request to authenticate the user...)
 * if(response.status === 200) localStorage.setItem("spinkodes-token", response.data.accessToken)
 *
 * Make sure you use the keyword "spinkodes-token" when storing the token in the localstorage
 *
 */

export default function AuthPage() {
	const router = useRouter();
	const pathname = usePathname();
	const [route, setRoute] = useState<RouteType>(null);
	const ViewRef = useRef<React.JSX.Element>();

	(function handleView() {
		switch (route) {
			case 'login':
				ViewRef.current = <Login />;
				break;
			case 'register':
				ViewRef.current = <Register />;
				break;

			default:
				break;
		}
	})();

	useEffect(() => {
		setRoute(pathname.split('/')[2] as RouteType);
	}, [pathname]);

	return (
		<div className="text-white w-full flex h-screen">
			<div className="hidden md:flex flex-[0.7] py-8 flex-col bg-[#00DC80] px-[4%] items-center justify-center">
				<div className="w-full h-full flex flex-col justify-center max-w-[600px] ml-auto">
					{route === 'login' ? (
						<h1 className="font-bold capitalize text-4xl">
							Sign In to the experience.
						</h1>
					) : (
						<h1 className="font-bold capitalize text-4xl">
							Sign Up for the experience.
						</h1>
					)}

					<h3 className="font-semibold text-2xl mt-2 text-white/90">
						Get the best of this opportunity
					</h3>

					<p className="mt-4 text-justify text-white/80 text-sm">
						Harum quia, laboriosam pariatur maxime maiores aut
						voluptas deserunt commodi a minima dignissimos. Harum
						quia, laboriosam pariatur maxime maiores aut voluptas
						deserunt commodi a minima dignissimos. Harum quia,
						laboriosam pariatur maxime maiores aut voluptas deserunt
						commodi a minima dignissimos.
					</p>
				</div>

				<p className=" text-white/80 text-xs max-w-[600px] ml-auto">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa ratione eligendi sequi dignissimos consequatur
					asperiores consectetur quo nobis exercitationem error
					aliquam, animi fugit porro, voluptatum praesentium eaque
					illo nesciunt odio.
				</p>
			</div>
			<div className="flex flex-col flex-1 px-[4%] bg-gradient-radial py-8">
				<p className="text-3xl text-white/70 mb-16 font-bold w-full">
					Spnkodz.
				</p>
				{/* Tabs */}
				<div className="flex gap-6 mt-7 mb-8">
					<button
						onClick={() => router.push('/auth/login')}
						disabled={route === 'login'}
						aria-current={route === 'login'}
						className="[&[aria-current='true']]:border-b-2 p-3 w-full sm:min-w-[150px] flex justify-center items-center transition-all text-sm sm:text-xl [&[aria-current='true']]:text-white text-white/40 font-semibold"
					>
						Sign In
					</button>

					{/* Divider */}
					<div className="h-full w-[2px] bg-[#00DC80]" />

					<button
						onClick={() => router.push('/auth/register')}
						disabled={route === 'register'}
						aria-current={route === 'register'}
						className="[&[aria-current='true']]:border-b-2 p-3 w-full sm:min-w-[150px] flex justify-center items-center transition-all text-sm sm:text-xl [&[aria-current='true']]:text-white text-white/40 font-semibold"
					>
						Sign Up
					</button>
				</div>
				{/* Views */}
				{ViewRef.current}
			</div>
		</div>
	);
}
