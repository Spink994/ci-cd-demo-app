import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Suspense } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Simple Authentication | Dashboard',
	description: 'Created by Spinkodes.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	);
}
