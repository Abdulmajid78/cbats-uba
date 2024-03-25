import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineYoutube,
} from 'react-icons/ai'
import { LiaTelegram } from 'react-icons/lia'

const Footer = () => {
	return (
		<footer
			style={{ background: 'rgb( 0, 168, 207)' }}
			className='bg-secondary w-full mt-20 py-5 backdrop-blur-sm'
		>
			<div className='container flex justify-between sm:flex-row flex-col gap-5'>
				<div className='flex flex-col gap-5 justify-between'>
					<div>
						<Link href='#!' className='w-40 flex flex-col items-center mb-5'>
							<Image
								src='/images/logo.png'
								width='0'
								height='0'
								sizes='100vw'
								className='w-full h-auto'
								alt='hero image'
								priority={true}
							/>
						</Link>
					</div>
				</div>
				<div className='text-white'>
					<h3 className='text-xl mb-3'>Social</h3>
					<ul className='text-base flex flex-col gap-2'>
						<li>
							<a
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://linkedin.com'
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://instagram.com'
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://twitter.com'
							>
								Twitter
							</a>
						</li>
						<li>
							<a
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://facebook.com'
							>
								Facebook
							</a>
						</li>
					</ul>
				</div>
				<div className='text-white'>
					<h3 className='text-xl mb-3'>Contact Us</h3>
					<ul className='flex flex-col gap-2 text-base max-w-sm w-full'>
						<li>
							<span className='font-bold'>Address:</span> 100011, Республика
							Узбекистан, г. Ташкент, ул. Навои, 38
						</li>
						<li>
							<span className='font-bold'>Phone: </span>+998 78 147-77-77
							&nbsp;&nbsp;&nbsp; +998 78 777-77-77
						</li>
						<li>
							<span className='font-bold'>Email:</span>{' '}
							info@eastwest.com
						</li>
					</ul>
				</div>
			</div>

			<p className='text-white hidden sm:block text-end container pt-5 mt-5'>
				© 2024. All rights reserved
			</p>
		</footer>
	)
}

export default Footer
