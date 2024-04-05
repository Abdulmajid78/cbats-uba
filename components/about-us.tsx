"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollUp from '@components/scroll-up'
import { BsArrowRight } from 'react-icons/bs'
import { useTranslations } from 'next-intl'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'


const AboutUs = () => {
const t = useTranslations("Index")

if (typeof window !== 'undefined') {
	AOS.init({});
}
// useEffect(() => {
//     AOS.init({});
//   }, []);

	return (
		<>
			<ScrollUp />
			<section
				id='about'
				className='mb-10 xl:mb-0 lg:mx-40 mx-5 container-fluid flex flex-col justify-center scroll-mt-[290px]'
			>
				{/* <Reveal>
					<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-10 text-center'>
						ABOUT CBATS
					</h1>
				</Reveal> */}
				<div className='rounded-xl w-full flex xl:flex-row flex-col gap-5 mb-20 items-center'>
				
					<div className='xl:w-3/6 w-full'>
						<div data-aos="fade-up"
						data-aos-offset="100"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="false"
						>
							<Image
								src='/images/top.webp'
								alt='news image'
								width={0}
								height={0}
								sizes='80vw'
								className='w-full rounded-xl'
								priority={true}
								quality={70}
							/>
						</div>
					</div>
				
				{/* p */}
					<div className='flex flex-col  w-full xl:w-3/5 mx-2'>
						<div data-aos="fade-up"
					 data-aos-offset="100"
					 data-aos-delay='270'
					 data-aos-duration="1000"
					 data-aos-easing="ease-in-out"
					 data-aos-mirror="true">
							<div>
							<h1 className='text-2xl lg:text-3xl font-serif font-bold leading-9 md:leading-7 lg:leading-9 text-gray-800 text-center'>
								{t("ABOUTCBATS")}
							</h1>
							
							<p className='font-normal lg:pt-4 lg:text-xl sm:text-base text-base text-justify lg:pr-5 text-gray-600'>
								{t("TheCouncilOf")}
								<br />
								<br />
								{t("ItWasEstablished")}
								
								<br />
								{t("ItsMembersAre")}
							</p>
							{/* link */}
							<Link
								className='flex opacity-1 pt-5 gap-3 group text-blue-500'
								href='https://www.tdbbk.org'
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
									{t("LearnMore")}
								</p>
								<span className='border border-blue-500 border-1 group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
									<BsArrowRight />
								</span>
							</Link>
							</div>
						
						
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs
