import { Footer, Navigation } from '@/components/index'
import { buttonVariants } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cn, truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'
import { newsDataType } from '@lib/types'
import Head from 'next/head'
import { DataParams, Root, Article, Source } from '@lib/types'
import { BsArrowRight } from 'react-icons/bs'

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
		pageSize: 9,
		page: 1,
		query: 'business',
		sources: 'cnn',
		language: 'en',
	})

	return (
		<div>
			<Head>
				<title>News - EastWest</title>
			</Head>
			<Navigation />
			<div className='container mb-10'>
				<nav className='flex gap-2 text-muted-foreground my-5'>
					<Link
						className='flex items-center gap-2 text-xl font-semibold'
						href='/'
					>
						Home
						<AiOutlineRight />
					</Link>
					<Link
						className='flex items-center gap-2 text-xl font-semibold'
						href='/news'
					>
						News
					</Link>
				</nav>
				<h1 className='font-semibold text-4xl mb-5'>News</h1>

				<div className='cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
					{data.articles.map((news, i) => {
						return (
							<Card
								key={i}
								className='card shadow-none flex flex-col justify-between'
							>
								<div>
									<CardHeader className='card-left'>
										{news.urlToImage ? (
											<Image
												src={news.urlToImage}
												alt='news image'
												width={0}
												height={0}
												sizes='100vw'
												className='rounded-sm w-[352px] h-[198px] object-cover'
												priority={true}
												quality={70}
											/>
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
									</CardHeader>
									<div className='card-right'>
										<CardContent>
											<Link href={news.url} target='_blank'>
												<CardTitle className='text-xl lg:text-2xl font-medium text-gray-800 mb-1'>
													{news.title}
												</CardTitle>
											</Link>
											<CardDescription className=''>
												{new Date(news.publishedAt).toLocaleString()}
											</CardDescription>
										</CardContent>
										<CardFooter className='flex flex-col items-start'>
											<p className='text-base text-gray-600'>
												{news.description}
											</p>
										</CardFooter>
									</div>
								</div>
								<Link
									className='p-6 pt-0 flex gap-3 items-center group text-base text-primary'
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
									<span className='border border-primary border-1 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-[1.2] rounded-full p-1'>
										<BsArrowRight />
									</span>
								</Link>
							</Card>
						)
					})}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default News
