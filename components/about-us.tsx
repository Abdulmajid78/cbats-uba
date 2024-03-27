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
				className='mb-0 mx-40 container-flex flex flex-col justify-center scroll-mt-[290px]'
			>
				<Reveal>
					<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-10 text-center'>
						ABOUT CBATS
					</h1>
				</Reveal>
				<div className='rounded-xl w-full grid md:grid-cols-about grid-cols-1 grid-rows-1 gap-5 mb-20 items-center'>
					<Reveal
						slideControl={true}
						mainControl={false}
						slidePosition='east-west'
					>
						<Swiper
							spaceBetween={50}
							slidesPerView={1}
							slidesPerGroup={2}
							loop={true}
							autoplay= {{ delay: 3500 }}
							>
      
							{/* <SwiperSlide>
							<Image
								src='/images/top.webp'
								alt='news image'
								width={0}
								height={0}
								sizes='100vw'
								className='w-max rounded-xl scale-x-[-1]'
								priority={true}
								quality={70}
							/>
							</SwiperSlide> */}
							<SwiperSlide>
							<Image
								src='/images/top2.jpg'
								alt='news image'
								width={0}
								height={0}
								sizes='80vw'
								className='w-4/5 rounded-xl scale-x-[-1]'
								priority={true}
								quality={70}
							/>
							</SwiperSlide>
			
						</Swiper>
				</Reveal>
				
					<div className='flex flex-col w-full mx-2 items-start gap-8'>
					{/* p */}
						<div>
							<Reveal>
								<p className='font-normal lg:text-2xl sm:text-base text-base text-justify pr-5 text-gray-600'>
									The Council of Banks Associations of Turkic States operates in order to develop cooperation between member bank associations, to evaluate the demands of bankers and business people correctly, to develop the banking sector, to produce positive outputs for the real sector and national economies, to share experiences by consulting on issues and solutions related to the sector.
									<br />
									<br />
									It was established on November 4, 2022 in Istanbul.
									<br />
									<br />
									Its members are the Azerbaijan Banks Association, the Republic of Kazakhstan Banks Association, the Kyrgyzstan Banks Association, the Banks Association of Turkiye, the Participation Banks Association of Turkiye, the Banks Association of Uzbekistan.
								</p>
							</Reveal>
						</div>
						{/* link */}
						<Reveal>
							<Link
								className='flex opacity-1 gap-3 items-center group text-blue-500'
								href='https://www.tdbbk.org/tr'
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
