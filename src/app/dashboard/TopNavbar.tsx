/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';

import React, { useState } from 'react';
import Search from '@/assets/icons/search.svg';
import Bell from '@/assets/icons/bell.svg';
import Image from 'next/image';

export default function TopNavbar() {
	const [searchState, setSearchState] = useState(false);

	return (
		<nav className="h-16 bg-white gap-4 sticky top-0 justify-between flex px-[4%] border-b-2 border-slate-100">
			<div className="flex w-full h-full gap-2">
				<button onClick={() => setSearchState(!searchState)}>
					<Image
						width={20}
						height={8}
						src={Search}
						alt="search-icon"
					/>
				</button>
				<input
					aria-expanded={searchState}
					type="search"
					name="search"
					placeholder="input your search terms"
					className="bg-transparent text-sm placeholder:text-sm transition-all max-w-[400px] [&[aria-expanded='true']]:px-4 [&[aria-expanded='true']]:border-r [&[aria-expanded='true']]:w-full w-0 h-full text-slate-500 outline-none bg-white px-0"
				/>
			</div>

			<div className="h-full w-[86px] border-r-2 border-l-2 flex items-center justify-center">
				<Image
					width={25}
					height={16}
					src={Bell}
					alt="bell-icon"
				/>
			</div>

			{/* User profile */}
			<div className="flex items-center gap-2">
				<span className="w-8 h-8 rounded-full flex bg-slate-300" />
				<span className="text-sm font-medium">Spinkodes</span>
			</div>
		</nav>
	);
}
