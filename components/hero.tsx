'use client'

import { motion } from 'framer-motion'
import AnimatedText from './animatedText'

const Hero = () => {
	type PlaceholderText = {
		type: string
		text: string
		className: string
		color?: string
	}
	const placeholderText: PlaceholderText[] = [
		{
			type: 'heading1',
			text: 'Welcome to ',
			className:
				'md:text-3xl sm:text-[44px] text-4xl text-start text-gray-800',
		},
		{
			type: 'heading1',
			text: 'Finance trends – FinTech and banks, anti-fraud, popularization of Islamic banking.     May 7, 2024',
			className:
				'md:text-4xl px-[20px] sm:text-[44px] text-4xl text-start text-gray-800',
		},
		{
			type: 'heading2',
			text: "Conference website, which is powered by Uzbekistan banking Association with the cooperation of CBATS.",
			className:
				'w-full sm:max-w-[1200px] max-w-[400px] sm:text-lg text-base text-gray-600 !leading-6 mt-2 px-[20px]',
			color: '#4B5563',
		},
		{
			type: 'heading2',
			text: "The conference is an excellent dialogue platform and provides an excellent opportunity to discuss topical issues and share international best practices.",
			className:
				'w-full sm:max-w-[1400px] max-w-[400px] sm:text-lg text-base text-gray-600 !leading-6 px-[20px]',
			color: '#4B5563',
		},
	]

	const pathVariants = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
		},
	}

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	}

	return (
		<section className='min-h-[120px] container-fluid relative overflow-hidden flex flex-col justify-center pt-5 pb-8'>
			<div className='mx-auto rounded-lg lg:-mb-5 sm:mb-0 mb-5 font-vinnytsia'>
							<motion.div
					className='App'
					initial='hidden'
					animate={'visible'}
					variants={container}
				>
					<div className='container-fluid mx-40'>
						{placeholderText.map((item, index) => {
							return <AnimatedText {...item} key={index} />
						})}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
