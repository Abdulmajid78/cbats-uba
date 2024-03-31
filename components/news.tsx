"use clien"
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Reveal from './reveal'
import { useTranslations } from 'next-intl'


const News = () => {
	


	const t = useTranslations("Index")

	return (
		<section id='news' className='container mt-10 scroll-mt-[120px] pt-5'>
			<Reveal>
				<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-7 text-center'>
					{t("NEWS")}
				</h1>
			</Reveal>
			<div className='news gap-4'>
				<div className='news-item grid gap-4'>
						
							<div
								className='p-5 flex gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'
							>
									<div className='rounded-sm w-[352px] h-[198px] bg-slate-200 flex items-center justify-center'>
										<Image
											src='/images/news-bg.png'
											alt='news image'
											width={250}
											height={106}
											className='rounded-sm opacity-80'
											priority={true}
											quality={70}
										/>
									</div>
								
								<div className='flex flex-col items-start w-full'>
									<Link href="" target='_blank'>
										<Reveal y={40}>
											<h1 className='font-bold text-xl pb-2 text-gray-800'>
												something was something
											</h1>
										</Reveal>
									</Link>
									<Reveal y={40}>
										<p className='text-base pb-2 text-gray-600'>
											something was something something was something something was something something was something
										</p>
									</Reveal>
									<Reveal y={40}>
										<Link
											className='flex gap-3 items-center group text-blue-500'
											href=""
											target='_blank'
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

							<div
								className='p-5 flex gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'
							>
									<div className='rounded-sm w-[352px] h-[198px] bg-slate-200 flex items-center justify-center'>
										<Image
											src='/images/news-bg.png'
											alt=''
											width={250}
											height={106}
											className='rounded-sm opacity-80'
											priority={true}
											quality={70}
										/>
									</div>
								
								<div className='flex flex-col items-start w-full'>
									<Link href="" target='_blank'>
										<Reveal y={40}>
											<h1 className='font-bold text-xl pb-2 text-gray-800'>
												something was something
											</h1>
										</Reveal>
									</Link>
									<Reveal y={40}>
										<p className='text-base pb-2 text-gray-600'>
											something was something something was something something was something something was something
										</p>
									</Reveal>
									<Reveal y={40}>
										<Link
											className='flex gap-3 items-center group text-blue-500'
											href=""
											target='_blank'
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
				</div>


				<div className='p-5 grid grid-cols-news gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'>
					<Reveal
						slideControl={true}
						mainControl={false}
						slidePosition='bottom'
						className='news-image'
					>
						<Image
							src='/images/news/news3.jpg'
							alt='news image'
							width={360}
							height={225}
							sizes='100%'
							className='rounded-sm object-cover w-[332px] h-[442px]'
							priority={true}
							quality={100}
						/>
					</Reveal>
					<div className='flex flex-col items-start'>
						<Reveal y={40}>
							<h1 className='font-bold text-xl pb-2'>
								Registan Square in Samarkand saw over 1mn tourists in 2022
							</h1>
						</Reveal>
						<Reveal y={40}>
							<p className='text-base pb-2'>
								Samarkand was chosen as the 2023 World Tourism Capital at the
								24th General Assembly of the UN World Tourism Organization
								(UNWTO) in Spain. Besides, this year the city is set to host the
								25th session of the General Assembly of the World Tourism
								Organization (UNWTO).
							</p>
						</Reveal>
						<Reveal y={40}>
							<Link
								className='flex gap-3 items-center group text-blue-500 text-primary'
								href='https://daryo.uz/en/2023/01/11/registan-square-in-samarkand-saw-over-1mn-tourists-in-2022'
								target='_blank'
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
			</div>
		</section>
	)
}

export default News
