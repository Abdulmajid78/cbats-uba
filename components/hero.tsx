'use client'

import { useTranslations } from 'next-intl'
import AOS from 'aos';
import "aos/dist/aos.css";

if (typeof window !== 'undefined') {
	// Check if the code is running in the browser
	AOS.init({});
}

const Hero = () => {
	const t = useTranslations("Index")
	

	return (
		<section className='min-h-[120px] container-fluid relative overflow-hidden flex flex-col justify-center pt-5 pb-8'>
			<div className='mx-auto rounded-lg lg:-mb-5 sm:mb-0 mb-5 font-vinnytsia'
				data-aos="fade-down"
					data-aos-offset="100"
					data-aos-delay="0"
					data-aos-duration="700"
					data-aos-easing="ease-in-out"
					
					>
				<div>
					<h1 className='md:text-3xl font-normal sm:text-[44px] lg:text-4xl text-center text-gray-800'>{t("Welcometo")}</h1>
					<h1 className='md:text-4xl font-normal text-center xl:px-[20px] sm:text-[44px] text-xl text-gray-800'> {t('FinanceTrends')}</h1>
					<h1 className='md:text-4xl font-normal text-center xl:px-[20px] mt-2 sm:text-[44px] text-xl text-gray-800'>{t("date")}</h1>
				</div>
				<div>
					<h2 className='font-normal w-full sm:max-w-[1200px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 mt-2 lg:px-[20px]'>{t("ConferenceWebsite")} <b className='font-normal text-black'>{t("FinanceTrends")}</b> {t("ConferenceWebsite2")}</h2>
					<h2 className='font-normal w-full sm:max-w-[1200px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 mt-2 lg:px-[20px]'></h2>

					<h2 className='font-normal w-full sm:max-w-[1000px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 lg:px-[20px]'>{t("TheConferenceIs")}</h2>
				</div>
			</div>
		</section>
	)
}

export default Hero
