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
		<section id='news' className='container-fluid  bg-white scroll-mt-[110px] pt-8'>
			<Reveal>
				<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-5 text-center'>
					{t("NEWS")}
				</h1>
			</Reveal>

			<div className='container news gap-4'>
				<div className='news-item grid gap-4'>
				<div
						className='p-5 flex gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'
					>
						
						<Reveal slideControl={true} mainControl={false} width='100%'>
							<Image
								src="/images/news/news-1.webp"
								alt='news image'
								width={0}
								height={0}
								sizes='100vw'
								className='rounded-sm w-[310px] h-full object-cover'
								priority={true}
								quality={70}
							/>
						</Reveal>
						

						<div className='flex flex-col justify-between items-start w-full'>
							<Link href={t("news1")} target='_blank'>
								<Reveal y={40}>
									<h1 className='font-bold text-xl pb-2 text-gray-800'>
									O‘zbekiston banklari Assotsiatsiyasiga beriladigan eng ko‘p savollarning asosi kredit tarixi bilan bog‘liqdir
									</h1>
								</Reveal>
							</Link>
							
							<Reveal y={40}>
								<Link
									className='flex gap-3 items-center group text-base text-primary'
									href={t("news1")}
									target='_blank'
								>
									<p
										style={{
											backgroundImage:
												' linear-gradient(currentcolor,currentcolor)',
											backgroundPosition: '0 100%',
											backgroundRepeat: ' no-repeat',
										}}
										className='transition-all text-blue-500 bg-[length:0%_1px] group-hover:bg-[length:100%_1px] duration-200'
									>
										Learn More
									</p>
									<span className='border text-blue-500 border-blue-500 border-1 group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
										<BsArrowRight />
									</span>
								</Link>
							</Reveal>
						</div>
					</div>




					<div
						className='p-5 flex gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'
					>
						
							<Reveal slideControl={true} mainControl={false} width='100%'>
								<Image
									src="/images/news/news-2.webp"
									alt='news image'
									width={0}
									height={0}
									sizes='100vw'
									className='rounded-sm w-[310px] h-full object-cover'
									priority={true}
									quality={70}
								/>
							</Reveal>
						

						<div className='flex flex-col justify-between items-start w-full'>
							<Link href={t("news2")} target='_blank'>
								<Reveal y={40}>
									<h1 className='font-bold text-xl pb-2 text-gray-800'>
										Markaziy bankning korruptsiyaga qarshi kurashishdagi faoliyati samaradorligi yuqori baholandi
									</h1>
								</Reveal>
							</Link>
							
							<Reveal y={40}>
								<Link
									className='flex gap-3 items-center group text-base text-primary'
									href={t("news2")}
									target='_blank'
								>
									<p
										style={{
											backgroundImage:
												' linear-gradient(currentcolor,currentcolor)',
											backgroundPosition: '0 100%',
											backgroundRepeat: ' no-repeat',
										}}
										className='transition-all bg-[length:0%_1px] text-blue-500 group-hover:bg-[length:100%_1px] duration-200'
									>
										Learn More
									</p>
									<span className='border border-blue-500 text-blue-500 border-1 group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
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
							src='/images/news/news-3.webp'
							alt='news image'
							width={360}
							height={225}
							sizes='100%'
							className='rounded-sm object-cover w-[332px] h-[477px]'
							priority={true}
							quality={100}
						/>
					</Reveal>
					<div className='flex flex-col justify-between items-start'>
					<Link href={t("news3")} target='_blank'>
						<Reveal y={40}>
							<h1 className='font-bold text-xl pb-2'>
							ISSV Oʻzbekiston eksportchilarini toʻgʻridan-toʻgʻri qoʻllab-quvvatlash boʻyicha davra suhbatlari tashkil etmoqda
							</h1>
						</Reveal>
					</Link>
						
						<Reveal y={40}>
							<Link
								className='flex gap-3 items-center group text-blue-500 text-primary'
								href={t("news3")}
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
