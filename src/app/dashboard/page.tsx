'use client';

import React, { useState } from 'react';

type TabState = 'tab one' | 'tab two' | 'tab three';

const dasboardData = [
	{
		key: 14 * Math.random() * 14,
		name: 'Temitayo Bakare',
		email: 'Temitayobakare@gmail.com',
		occupation: 'DevOps',
		contact: '+23408121052551',
		startDate: '+5yrs',
	},
	{
		key: 14 * Math.random() * 14,
		name: 'Ayodeji Bakare',
		email: 'ayodeji.bakare994@gmail.com',
		occupation: 'Frontend Developer',
		contact: '+23408121052551',
		startDate: '2yrs',
	},
	{
		key: 14 * Math.random() * 14,
		name: 'Oluwaseun Somefun',
		email: 'oluwaseunsomefun@gmail.com',
		occupation: 'Backend Developer',
		contact: '+23408121052551',
		startDate: '+5yrs',
	},
	{
		key: 14 * Math.random() * 14,
		name: 'Daniel Ekundayo',
		email: 'dameldesign@gmail.com',
		occupation: 'Frontend Developer',
		contact: '+23408121052551',
		startDate: '2yrs',
	},
];

export default function Dashboard() {
	const [activeTab, setActiveTab] = useState<TabState>('tab one');

	return (
		<div className="w-full bg-slate-50 p-[4%] min-h-screen">
			<div className="w-full flex items-center justify-between">
				<span className="font-bold text-3xl text-slate-600">
					Dashboard
				</span>
				<button className="text-white/80 gap-3 bg-[#00DC80] font-medium flex items-center p-3 rounded">
					<span className="text-2xl">+</span> Add Employee
				</button>
			</div>

			{/* Tabs */}
			<div className="w-full flex mt-8">
				{['tab one', 'tab two', 'tab three'].map((tab) => (
					<button
						onClick={() => setActiveTab(tab as TabState)}
						key={tab}
						aria-current={activeTab === tab}
						className="flex min-w-[100px] font-semibold [&[aria-disabled='true']]:opacity-40 [&[aria-disabled='true']]:pointer-events-none [&[aria-current='true']]:border-b-2 [&[aria-current='true']]:border-[#00DC80]  capitalize items-center text-slate-500 text-sm justify-center px-3 py-2"
					>
						{tab}
					</button>
				))}
			</div>

			{/* Views */}
			<div className=" mt-8">
				{/* Header */}
				<div className="grid grid-cols-6">
					{[
						'Basic Info',
						'Profession',
						'Contact',
						'Years of Ex.',
					].map((data) => (
						<span
							aria-colspan={Number(data === 'Basic Info')}
							className="font-bold text-sm text-slate-400 [&[aria-colspan='1']]:col-span-3"
							key={Math.random()}
						>
							{data}
						</span>
					))}
				</div>

				{/* Body */}
				<div className="w-full flex flex-col gap-4 mt-6">
					{dasboardData.map((data, index) => (
						<div
							key={data.key}
							className="grid grid-cols-6  hover:shadow-lg  transition-shadow shadow-sm bg-white min-h-[80px]"
						>
							{/* Basic information */}
							<div className="flex gap-3 items-center col-span-3">
								<span className="font-semibold px-8 text-slate-400 text-xs lg:text-sm">
									{index + 1}
								</span>

								<span className="flex min-h-[40px] min-w-[40px] bg-slate-400 rounded-full" />
								<div className="flex flex-col">
									<span className="font-semibold text-xs lg:text-sm">
										{data.name}
									</span>
									<span className="text-[10px] break-words truncate text-slate-500">
										{data.email}
									</span>
								</div>
							</div>

							{/* Profession */}
							<span className="flex items-center font-semibold text-xs lg:text-sm text-slate-500">
								{data.occupation}
							</span>

							{/* Contact information */}
							<span className="flex items-center font-semibold text-xs lg:text-sm text-slate-500">
								{data.contact}
							</span>

							{/* Experience */}
							<span className="flex items-center font-semibold text-xs lg:text-sm text-slate-500">
								{data.startDate}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
