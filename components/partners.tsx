'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Reveal from './reveal'

const Partners = () => {
	const logos: string[] = [
		'logo1.jpg',
		'logo2.jpg',
		'logo3.png',
		'logo4.jpg',
		'logo5.jpg',
		'logo6.jpg',
		'logo7.jpg',
		'logo8.jpg',
	]
	return (
		<section id='partners' className='container mb-10 scroll-mt-[100px] py-10'>
			<div className='2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 '>
				<div className='w-full flex flex-col justify-center items-center'>
					<div className='flex flex-col justify-center items-center text-center space-y-4'>
						<Reveal>
							<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800'>
								CBATS
							</h1>
						</Reveal>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-around gap-x-5 gap-y-5 xl:gap-x-8 mt-10'>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-6 space-y-6 group'>
							<a href="https://uba.uz/ru/">
							<Image
								width={0}
								height={0}
								sizes='100vw'
								src={'/images/logos/logo1.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
							</a>
						</div>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 group'>
							<a href="">
							<Image
								width={0}
								height={0}
								sizes='100vw'								
								src={'/images/logos/logo2.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
							</a>
						</div>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 group'>
							<Image
								width={0}
								height={0}
								sizes='100vw'
								src={'/images/logos/logo3.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
						</div>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 group'>
							<Image
								width={0}
								height={0}
								sizes='100vw'
								src={'/images/logos/logo4.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
						</div>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 group'>
							<Image
								width={0}
								height={0}
								sizes='100vw'
								src={'/images/logos/logo5.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
						</div>
						<div className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-100 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 group'>
							<a href="https://www.tbb.org.tr/tr">
								<Image
								width={0}
								height={0}
								sizes='100vw'
								src={'/images/logos/logo6.png'}
								alt='image'
								className='w-[170px] saturate-0 group-hover:saturate-100'
							/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partners
