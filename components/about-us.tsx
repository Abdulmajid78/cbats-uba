"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollUp from '@components/scroll-up'
import { BsArrowRight } from 'react-icons/bs'
import Reveal from './reveal'
import { useTranslations } from 'next-intl'



const AboutUs = () => {
const t = useTranslations("Index")

	return (
		<>
			<ScrollUp />
			<section
				id='about'
				className='mb-0 mx-40 container-fluid flex flex-col justify-center scroll-mt-[290px]'
			>
				{/* <Reveal>
					<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-10 text-center'>
						ABOUT CBATS
					</h1>
				</Reveal> */}
				<div className='rounded-xl w-full flex md:flex-row flex-col gap-5 mb-20 items-center'>
					
					<div className='xl:w-3/6 w-full'>
						<Image
							src='/images/top.png'
							alt='news image'
							width={0}
							height={0}
							sizes='80vw'
							className='w-full rounded-xl'
							priority={true}
							quality={70}
						/>
					</div>
				
				{/* p */}
					<div className='flex flex-col h-[360px] w-full xl:w-3/5 mx-2'>
					<h1 className='text-2xl lg:text-3xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 text-center'>
							{t("ABOUTCBATS")}
							</h1>
							<Reveal>
								<p className='font-normal lg:pt-4 lg:text-xl sm:text-base text-base text-justify lg:pr-5 text-gray-600'>
									{t("TheCouncilOf")}
									<br />
									<br />
									{t("ItWasEstablished")}
									
									<br />
									{t("ItsMembersAre")}
								</p>
							</Reveal>
						{/* link */}
							<Link
								className='flex opacity-1 pt-5 gap-3 group text-blue-500'
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
									{t("LearnMore")}
								</p>
								<span className='border border-blue-500 border-1 group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
									<BsArrowRight />
								</span>
							</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs
