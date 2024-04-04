import Image from 'next/image'
import React from 'react'
import insta from './../public/images/svg/Instagram-Plain.svg'
import twitter from './../public/images/svg/X-Plain.svg'
import facebook from './../public/images/svg/Facebook-Plain.svg'
import { useTranslations } from 'next-intl'

const Footer = () => {

	const t = useTranslations("Index")

	return (
		<footer
		style={{ background: 'linear-gradient(to bottom, rgba( 0, 168, 207,0.6), rgba( 0, 118, 207,1)) ,url(/images/glitter.png) ', }}
		className='bg-secondary w-full mt-4 py-5 backdrop-blur-sm'
		>
			<div className='container flex justify-between sm:flex-row flex-col gap-5'>
				<div className='text-white w-40'>
					<h3 className='text-xl mb-3'>{t("Social")}</h3>
					<ul className='text-base flex flex-row gap-1'>
						<li>
							<a target='_blank'
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all text-1xl bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://www.instagram.com/uba_uz/' 
							>
								<Image 
									width={20} 
									height={20} 
									className='w-8'
									src={insta} alt="sda" />
							</a>
						</li>
						<li>
							<a target='_blank'
								style={{
									backgroundImage:
										' linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://twitter.com/i/flow/login?redirect_after_login=%2FHadiyaAbdu84744'
							>
								<Image 
									width={30} 
									height={30} 
									className='w-8'
									src={twitter} alt="sda" />
							</a>
						</li>
						<li>
							<a target='_blank'
								style={{
									backgroundImage:
										'linear-gradient(currentcolor,currentcolor)',
									backgroundPosition: '0 100%',
									backgroundRepeat: ' no-repeat',
								}}
								className='transition-all bg-[length:0%_1px] hover:bg-[length:100%_1px] duration-200'
								href='https://www.facebook.com/profile.php?id=100070436701467'
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
					<h3 className='text-xl mb-3'>{t("ContactUs")}</h3>
					<ul className='flex flex-col gap-2 text-base w-full'>
						<li>
							<span className='font-bold font-serif'>{t("Address")}: </span>
								{t("RepublicOfUzbekistan")}
						</li>
						<div className='flex gap-3'>
							<li>
								<span className='font-bold font-serif'>{t("Phone")}: </span>+99871 238-69-61
								&nbsp;
							</li>
							<li>
								<span className='font-bold font-serif'>{t("Email")}:</span>{' '}
								<a href="mailto:office@uba.uz">office@uba.uz</a>
							</li>
						</div>
					</ul>
				</div>

				<div className='justify-end flex flex-col items-end w-1/3 pt-2'>
					<p className='text-white'>
						{t("AllRightsReserved")}
					</p>
					<p className="text-white">
						Created by UFT | Unique Future Tecnology
					</p>
				</div>
			</div>

			
		</footer>
	)
}

export default Footer
