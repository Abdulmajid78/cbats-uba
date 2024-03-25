/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'uzkimyoimpeks.uz',
			},
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
			},
			{
				protocol: 'https',
				hostname: 'media.cnn.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.cnn.com',
			},
		],
	},
}

module.exports = nextConfig
