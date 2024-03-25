'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false)
	const handleScroll = () => {
		if (window?.pageYOffset > 400 && window?.pageYOffset < 3500) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<button
			className={cn(
				'fixed p-2 z-10 lg:right-14 md:right-10 sm:right-5 right-3 border-blue-500 border-2 flex justify-center items-center text-blue-500 hover:text-white hover:bg-blue-500 transition-all -bottom-16 rounded-full -rotate-90 hover:scale-[1.2]',
				{ 'lg:bottom-16 md:bottom-10 sm:bottom-5 bottom-3': isVisible }
			)}
			onClick={scrollToTop}
		>
			<BsArrowRight fontSize='30px' />
		</button>
	)
}

export default ScrollUp
