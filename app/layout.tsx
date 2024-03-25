import { cn } from '@/lib/utils'
import '@styles/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const vinnytsia = localFont({
	src: [
		{
			path: '../public/fonts/VinnytsiaSansReg.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/VinnytsiaSansBold.ttf',
			weight: '600',
			style: 'normal',
		},
	],
	variable: '--font-vinnytsia',
})

const sanomat = localFont({
	src: [
		{
			path: '../public/fonts/SanomatSansLight.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/SanomatSansRegular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/SanomatSansMedium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/SanomatSansBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/SanomatSansBlack.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../public/fonts/SanomatSansThin.otf',
			weight: '200',
			style: 'normal',
		},
	],
	variable: '--font-sanomat',
})

export const metadata: Metadata = {
	title: 'Home - CBATS',
	description: 'https://eastwestcooperation.com/',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				suppressHydrationWarning={true}
				className={cn(sanomat.variable, vinnytsia.variable, 'font-sans')}
			>
				{children}
			</body>
		</html>
	)
}
