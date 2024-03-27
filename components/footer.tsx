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
								className='w-full h-4/5'
								alt='hero image'
								priority={true}
							/>
						</Link>
					</div>
				</div>
				<div className='text-white w-40'>
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
				<div className='text-white flex-initial w-2/5 items-end'>
					<h3 className='text-xl mb-3'>Contact Us</h3>
					<ul className='flex flex-col gap-2 text-base w-full'>
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

			<div className='container w-50 flex pt-2'>
			<p className='text-white flex-1'>
				© 2024. All rights reserved
			</p>
			<p className="text-white hover:after:content-['_|_Unique_Future_Tecnology']">
				Created by UTF 
			</p>
			</div>
		</footer>
	)
}

export default Footer
