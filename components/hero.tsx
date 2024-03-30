'use client'

import { motion } from 'framer-motion'
import AnimatedText from './animatedText'
import { useTranslations } from 'next-intl'

const Hero = () => {
	const t = useTranslations("Index")
	type PlaceholderText = {
		type: string
		text: string
		className: string
		color?: string
	}
	const placeholderText: PlaceholderText[] = [
		{
			type: 'heading1',
			text: t("Welcometo"),
			className:
				'md:text-3xl sm:text-[44px] text-4xl text-start text-gray-800',
		},
		{
			type: 'heading1',
			text: t('FinanceTrends'),
			className:
				'md:text-4xl text-center px-[20px] sm:text-[44px] text-4xl text-gray-800',
		},
		{
			type: 'heading2',
			text: t("ConferenceWebsite"),
			className:
				'w-full sm:max-w-[1200px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 mt-2 px-[20px]',
			color: '#4B5563',
		},
		{
			type: 'heading2',
			text: t("TheConferenceIs"),
			className:
				'w-full sm:max-w-[1000px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 px-[20px]',
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
				staggerChildren: 0.015,
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
