'use client';

import React, { useState } from 'react';
import HomeIcon from '@/assets/componentIcons/HomeIcon';
import ChatIcon from '@/assets/componentIcons/ChatIcon';
import ClockIcon from '@/assets/componentIcons/ClockIcon';
import Expand from '@/assets/icons/expand.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const sidebarData = [
	{
		key: 1,
		label: 'Home',
		icon: HomeIcon,
		href: '/dashboard',
		disabled: false,
	},
	{
		key: 2,
		label: 'Messages',
		icon: ChatIcon,
		href: '/messages',
		disabled: true,
	},
	{
		key: 3,
		label: 'Activities',
		icon: ClockIcon,
		href: '/activities',
		disabled: true,
	},
];

export default function Sidebar() {
	const pathname = usePathname();
	const [expand, setExpand] = useState(true);

	return (
		<div
			aria-expanded={expand}
			className="flex [&[aria-expanded='true']]:min-w-[50px] transition-all duration-300 flex-col min-w-[320px] h-full pl-6 pt-6"
		>
			<button
				onClick={() => setExpand(!expand)}
				className="flex text-[#00DC80] border-[#00DC80] text-sm font-bold w-max items-center rounded"
			>
				<Image
					width={40}
					height={20}
					src={Expand}
					className={`${
						!expand && '-rotate-180'
					} transition-all min-w-[40px] duration-300 max-h-[23px]`}
					alt="expand-icon"
				/>
			</button>

			<div className="h-full w-full flex items-center">
				<ul className="flex w-full flex-col gap-6">
					{sidebarData.map((link) => {
						const Icon = link.icon;
						return (
							<li
								className="w-full h-full"
								key={link.key}
							>
								<Link
									onClick={() => {
										if (link.disabled) return;
									}}
									aria-disabled={link.disabled}
									aria-current={link.href === pathname}
									className="w-full h-full p-3 flex items-center [&[aria-disabled='true']]:opacity-50 [&[aria-disabled='true']]:pointer-events-none gap-4 text-slate-500 [&[aria-current='true']]:border-r-4 [&[aria-current='true']]:border-[#00DC80] [&[aria-current='true']]:text-[#00DC80]"
									href={link.href}
								>
									<Icon
										size="25px"
										color={`${
											link.href === pathname
												? '#00DC80'
												: 'rgb(100,116,139)'
										}`}
									/>

									<span
										aria-expanded={expand}
										className="font-medium [&[aria-expanded='true']]:opacity-0 opacity-100 max-w-[60px] [&[aria-expanded='true']]:max-w-0 transition-all duration-300 text-sm text-inherit"
									>
										{link.label}
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
