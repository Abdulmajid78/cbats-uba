'use client'

import { useTranslations } from 'next-intl'

const Hero = () => {
	const t = useTranslations("Index")
	

	return (
		<section className='min-h-[120px] container-fluid relative overflow-hidden flex flex-col justify-center pt-5 pb-8'>
			<div className='mx-auto rounded-lg lg:-mb-5 sm:mb-0 mb-5 font-vinnytsia'>
				{/* <motion.div
					className='App'
					initial='hidden'
					animate={'visible'}
					variants={container}
				>
					<div className='container-fluid lg:mx-40 mx-10'>
						{placeholderText.map((item, index) => {
							return <AnimatedText {...item} key={index} />
						})}
					</div>
				</motion.div> */}
				<div>
					<h1 className='md:text-3xl sm:text-[44px] ,lg:text-4xl text-start text-gray-800'>{t("Welcometo")}</h1>
					<h1 className='md:text-4xl text-center xl:px-[20px] sm:text-[44px] text-xl text-gray-800'> {t('FinanceTrends')}</h1>
					<h1 className='md:text-4xl text-center xl:px-[20px] mt-2 sm:text-[44px] text-xl text-gray-800'>{t("date")}</h1>
				</div>
				<div>
					<h2 className='w-full sm:max-w-[1200px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 mt-2 lg:px-[20px]'>{t("ConferenceWebsite")}</h2>
					<h2 className='w-full sm:max-w-[1000px] max-w-[400px] mx-auto sm:text-lg text-base text-center text-gray-600 !leading-6 lg:px-[20px]'>{t("TheConferenceIs")}</h2>
				</div>
			</div>
		</section>
	)
}

export default Hero
