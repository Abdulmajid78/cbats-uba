
import React from 'react'

import { cn, truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { DataParams, Root } from '@/lib/types'
import { BsArrowRight } from 'react-icons/bs'
import Reveal from './reveal'
import { useTranslations } from 'next-intl'

const API_KEY = '79a7dcd9c61a4a149ad7d7213ab247e0'

async function getData(params: DataParams) {
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${params.query}&sources=${params.sources}&pageSize=${params.pageSize}&page=${params.page}&language=en&apiKey=${params.apiKey}`,
		{
			next: { revalidate: 3600 },
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const News = async () => {
	const data: Root = await getData({
		apiKey: API_KEY,
		pageSize: 2,
		page: 1,
		query: 'business',
		sources: 'cnn',
		language: 'en',
	})

	// const t = useTranslations("Index")

	return (
		<section id='news' className='container mt-10 scroll-mt-[120px] pt-5'>
			<Reveal>
				<h1 className='text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 font-vinnytsia mb-7 text-center'>
					{/* {t("NEWS")} */}
					NEWS
				</h1>
			</Reveal>
			<div className='news gap-4'>
				<div className='news-item grid gap-4'>
					{data.articles.map((news, i) => {
						return (
							<div
								key={i}
								className='p-5 flex gap-5 rounded-xl border bg-card text-card-foreground card shadow-none'
							>
								{news.urlToImage ? (
									<Reveal slideControl={true} mainControl={false} width='100%'>
										<Image
											src={news.urlToImage}
											alt='news image'
											width={0}
											height={0}
											sizes='100vw'
											className='rounded-sm w-[310px] h-full object-cover'
											priority={true}
											quality={70}
										/>
									</Reveal>
								) : (
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
								)}
								<div className='flex flex-col items-start w-full'>
									<Link href={news.url} target='_blank'>
										<Reveal y={40}>
											<h1 className='font-bold text-xl pb-2 text-gray-800'>
												{truncateText(news.title, 40)}
											</h1>
										</Reveal>
									</Link>
									<Reveal y={40}>
										<p className='text-base pb-2 text-gray-600'>
											{truncateText(news.description, 130)}
										</p>
									</Reveal>
									<Reveal y={40}>
										<Link
											className='flex gap-3 items-center group text-blue-500'
											href={news.url}
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
						)
					})}
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
