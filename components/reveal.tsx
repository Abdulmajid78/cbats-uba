'use client'
import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cx } from 'class-variance-authority'
import bgWave from '@public/images/glitter.png'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
	children: JSX.Element
	width?: 'fit-content' | '100%'
	y?: number
	slideControl?: boolean
	mainControl?: boolean
	slidePosition?: 'left' | 'right' | 'top' | 'bottom' | 'east-west'
	className?: string
}

const Reveal = ({
	children,
	width = '100%',
	y = 65,
	slideControl = false,
	mainControl = true,
	slidePosition = 'left',
	className,
}: Props) => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const mainControls = useAnimation()
	const slideControls = useAnimation()

	// useEffect(() => {
	// 	if (isInView) {
	// 		mainControls.start('visible')
	// 		slideControls.start('visible')
	// 	}
	// 	console.log(isInView)
	// }, [isInView, mainControls, slideControls])
	return (
		<div
			ref={ref}
			style={{ width }}
			className={cx('relative', className, {
				'overflow-hidden': slidePosition === 'east-west',
			})}
		>
			{mainControl && (
				<motion.div
					variants={{
						hidden: { opacity: 0, y: y },
						visible: { opacity: 1, y: 0 },
					}}
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 0.5, delay: 0.25 }}
				>
					{children}
				</motion.div>
			)}
			{slideControl && children}
			{slideControl === true && slidePosition === 'east-west' ? (
				<motion.div
					variants={{
						hidden: { left: '0%' },
						visible: { left: '100%' },
					}}
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
					className='absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-20 w-full flex flex-col justify-center items-center p-10 rounded-xl'
					style={{ backgroundColor: 'rgb(4 33 26 / 80%)' }}
				>
					<Image
						src='/images/wave.png'
						width='0'
						height='0'
						sizes='100%'
						className='w-fit h-5/6 mb-1'
						alt='hero image'
						priority={true}
					/>
					{/* </Link> */}
				</motion.div>
			) : slideControl === true && slidePosition === 'bottom' ? (
				<motion.div
					variants={{
						hidden: { bottom: '0%' },
						visible: { bottom: '100%' },
					}}
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
					className='absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-20 bg-no-repeat bg-[#daaf71] bg-[length:100%_442px] bg-bottom'
					style={{
						backgroundImage: `url(images/glitter.png)`,
						backgroundColor: 'rgb(0 173 255 / 40%)',
					}}
				></motion.div>
			) : slideControl === true && slidePosition === 'left' ? (
				<motion.div
					variants={{
						hidden: { left: '0%' },
						visible: { left: '100%' },
					}}
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
					className='absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-20 bg-no-repeat bg-[#daaf71] bg-[length:270px_100%] bg-left'
					style={{
						backgroundImage: `url(images/glitter.png)`,
						backgroundColor: 'rgb(0 173 255 / 40%)',
					}}
				></motion.div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Reveal
