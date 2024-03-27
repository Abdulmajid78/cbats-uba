import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import insta from './../public/images/svg/Instagram-Plain.svg'
import twitter from './../public/images/svg/X-Plain.svg'
import facebook from './../public/images/svg/Facebook-Plain.svg'

const Footer = () => {
	return (
		<footer
		style={{ background: 'linear-gradient(to bottom, rgba( 0, 168, 207,0.6), rgba( 0, 118, 207,1)) ,url(/images/glitter.png) ', }}
		className='bg-secondary w-full mt-4 pt-5 backdrop-blur-sm'
		>
			<div className='container flex justify-between sm:flex-row flex-col gap-5'>
				<div className='flex flex-col gap-5 justify-between'>
					<div>
						<Link href='#!' className='w-48 flex flex-col items-center mb-5'>
							<Image
								src='/images/logo-uba.png'
								width='0'
								height='0'
								sizes='100vw'
								className='w-2/3 h-2/6'
								alt='hero image'
								priority={true}
							/>
						</Link>
					</div>
				</div>
				<div className='text-white w-40'>
					<h3 className='text-xl mb-3'>Social</h3>
					<ul className='text-base flex flex-row gap-1'>
						<li>
							<a
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all text-1xl bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://instagram.com'
							>
								<Image 
									width={20} 
									height={20} 
									className='w-8'
									src={insta} alt="sda" />
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
								<Image 
									width={30} 
									height={30} 
									className='w-8'
									src={twitter} alt="sda" />
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
								<Image 
									width={30} 
									height={30} 
									className='w-8'
									src={facebook} alt="sda" />
							</a>
						</li>
					</ul>
				</div>
				<div className='text-white flex-initial w-22 items-end'>
					<h3 className='text-xl mb-3'>Contact Us</h3>
					<ul className='flex flex-col gap-2 text-base w-full'>
						<li>
							<span className='font-bold'>Address:</span>Республика
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
				<div className='container justify-end flex flex-col items-end w-1/3 pb-8 pt-2'>
					<p className='text-white'>
						© 2024. All rights reserved
					</p>
					<p className="text-white">
						Created by UTF | Unique Future Tecnology
					</p>
				</div>
			</div>

			
		</footer>
	)
}

export default Footer
