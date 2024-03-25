'use client'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Wave from './wave'
import AnimatedText from './animatedText'
import { useEffect, useRef, useState } from 'react'

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
			text: 'Welcome to CBATS',
			className:
				'md:text-7xl sm:text-[44px] text-4xl text-center text-gray-800',
		},
		{
			type: 'heading2',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore!',
			className:
				'w-full sm:max-w-[600px] max-w-[400px] sm:text-lg text-base text-center text-gray-600 !leading-6 px-[20px]',
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
		<section className='min-h-[calc(100vh-85px)] container-fluid relative overflow-hidden flex flex-col justify-center py-16'>
			<div className='max-w-[760px] mx-auto rounded-lg lg:-mb-5 sm:mb-0 mb-5 xl:mr-[20%] lg:mr-[13%] font-vinnytsia'>
							<motion.div
					className='App'
					initial='hidden'
					animate={'visible'}
					variants={container}
				>
					<div className='container-fluid'>
						{placeholderText.map((item, index) => {
							return <AnimatedText {...item} key={index} />
						})}
					</div>
				</motion.div>
			</div>
			<Wave />
		</section>
	)
}

export default Hero
