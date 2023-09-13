import React from 'react';

export default function ClockIcon({
	color,
	size,
}: {
	color?: string;
	size?: string;
}) {
	return (
		<svg
			width={size || '64px'}
			height={size || '64px'}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				id="SVGRepo_bgCarrier"
				strokeWidth="0"
			></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path
					d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
					stroke={color || 'rgb(100,116,139)'}
					strokeWidth="2.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{' '}
			</g>
		</svg>
	);
}
