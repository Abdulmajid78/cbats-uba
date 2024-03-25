"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import ScrollUp from '@components/scroll-up'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { BsArrowRight } from 'react-icons/bs'
import Reveal from './reveal'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const AboutUs = () => {
	return (
		<>
			<ScrollUp />
			<section
				id='about'
				className='mt-28 mb-0 mx-40 container-flex flex flex-col justify-center scroll-mt-[290px]'
			>
				<Reveal>
					<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-10 text-center'>
						About us
					</h1>
				</Reveal>
				<div className='rounded-xl h-fit w-full overflow-hidden grid md:grid-cols-about grid-cols-1 grid-rows-1 gap-5 items-center'>
					<Reveal
						slideControl={true}
						mainControl={false}
						slidePosition='east-west'
					>
						
						<Swiper
							spaceBetween={50}
							slidesPerView={1}
							loop={true}
							>
      
      <SwiperSlide>
		<Image
			src='/images/top.webp'
			alt='news image'
			width={500}
			height={500}
			className='w-max rounded-xl scale-x-[-1]'
			priority={true}
			quality={70}
		/>
		</SwiperSlide>
      
        </Swiper>
				</Reveal>
				
					<div className='flex flex-col mx-12 items-start gap-8'>
						<div>
							<Reveal>
								<p className='font-normal lg:text-2xl sm:text-base text-base text-justify pr-5 text-gray-600'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
									aliquid culpa quae expedita ab quos quo? Veniam eaque, autem
									modi minus aperiam commodi mollitia? Illum omnis quo enim
									culpa odit. Eligendi soluta minima similique facere in autotam
									alias nobis aspernatur, pariatur rerum tenetur? Nemo nequea
									similique facere in autem odio vero ullam laudantium omnis
									reprehenderit
								</p>
							</Reveal>
						</div>
						<Reveal>
							<Link
								className='flex gap-3 items-center group text-blue-500'
								href='/about'
							>
								<p
									style={{
										backgroundImage:
											' linear-gradient(currentcolor,currentcolor)',
										backgroundPosition: '0 100%',
										backgroundRepeat: ' no-repeat',
									}}
									className='transition-all bg-[length:0%_1px] group-hover:bg-[length:100%_1px] duration-200'
								>
									Learn More
								</p>
								<span className='border border-blue-500 border-1 group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
									<BsArrowRight />
								</span>
							</Link>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs
