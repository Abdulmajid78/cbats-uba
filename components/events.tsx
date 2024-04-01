"use client"

import { useState, useEffect } from 'react'
import React from 'react'
import Reveal from './reveal'
import { Chrono } from "react-chrono";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const Events = () => {

	const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true); // Component has mounted, update state to trigger re-render   
}, []);

	const t = useTranslations("Index")

	const items=[
			{
				title: "9:30-10:45",
				cardDetailedText: (
					<span className='mydeailcard p-6'>
						9.30-10.00 {t("event1")} <br/>
						{t("event2")}
						<br />
						10.00-10.05 {t("event3")}<br />
						10.05-10.10 {t("event4")} <br />
						10.10-10.15 {t("event441")} <br />
						10.15-10.20 {t("event442")} <br />
						10.20-10.25 {t("event443")} <br />
						10.25-10.30 {t("event444")} <br />
						10.30-10.45 {t("event5")}
					</span>
				),
			},
			{
				title: "10:45-12:00",
				cardDetailedText: (
					<span className='mydeailcard p-6'>
						{t("event6")} <br />{t("event7")}<br />
						10.45-11.00 {t("event8")} <br />
						11.00-11.15 <br />{t("tema2")} <br />{t("event10")}<br />
						{t("tema3")} <br /> {t("event12")} <br />
						11.30-11.45 {t("event13")} <br />
						11.45-12.00 {t("coffeebreak")}
					</span>
				),
			},
			{
				title: "12:00-14:00",
				cardDetailedText: (
							<span className='mydeailcard p-6'>
								{t("event15")} <br />{t("event16")} <br />
								12.00-12.15  {t("event17")}<br />
								12.15-12.30 {t("event18")} <br />
								12.30-12.45 {t("event19")} <br />
			 					12.45-13.00 {t("event20")}<br />
								13.00-14.00 {t("lunch")}
			 				</span>
						),
			},
			{
				title: "14:00-15:30",
				cardDetailedText: (
					<span className='mydeailcard p-6'>
						{t("event22")} <br /> {t("event23")} <br /> {t("event24")}<br />
						14.00-14.15 {t("tema1")} <br />  {t("event26")} <br />
						14.15-14.30 {t("tema2")} <br /> {t("event27")} <br /> 
						14.30-14.45 {t("tema3")} <br /> {t("event28")} <br />
						14.45-15.00 {t("tema4")} <br /> {t("event30")} <br />
						15.00-15.30 {t("coffeebreak")}
					</span>
						),
			},
					{
				title: "15:30-17:30",
				cardDetailedText: (
					<span className='mydeailcard p-6'>
						{t("event31")}<br /> {t("event32")} <br />
						15.30-15.45 {t("event33")} <br />
						{t("event34")} merkulov or yorqulov <br /> 
						15.45-16.00 {t("event35")}<br />
						16.00-16.15 {t("event36")} <br />
						16.15-16.30 {t("event37")} <br />
						17.00-17.30 {t("event38")}
					</span>
				),
			}, 
		]


	return (
		<section id='events' className='container-fluid mb-32 mt-24 lg:mt-0 relative scroll-mt-[180px]'>
			<Image
			width={700}
			height={700}
			quality={100}
			className='w-full object-contain  z-[-50] top-[190px] absolute'
			src="/images/header__bg.webp" alt="" />
			<Reveal>
				<div className='xl:w-2/3 text-center mx-auto'>
					<h1 className='text-2xl lg:text-3xl leading-9 md:leading-7 lg:leading-9 text-gray-800 font-serif font-bold text-center'>
						{t("financee")}
					</h1>
					<h1 className='text-2xl lg:text-3xl leading-9 md:leading-7 lg:leading-9 text-gray-800 font-serif font-bold mb-10 text-center'>
						{t("date")}</h1>
				<h1 className='text-3xl lg:text-4xl leading-9 md:leading-7 lg:leading-9 text-gray-800 mb-10 text-center'>
					{t("EventProgram")}
				</h1>
				</div>
			</Reveal>

			<div className='bg-[#F5F7F8] w-full rounded-xl overflow-hidden flex gap-8 items-center p-10'>
				<div className='text-center w-full flex flex-col gap-2'>

				{isClient && (
        			<Chrono
						items={items}
						mode="HORIZONTAL"
						classNames={{
							title: 'my-title',
							cardTitle: 'my-card-title',
							cardSubTitle: 'my-card-subtitle',
							cardDetailedText: 'mydeailcard',
 					    }}
						theme={{
							primary: 'rgba( 0, 168, 287,1)',
							secondary: 'rgba( 0, 168, 300,1)',
						}}
						/>
      			)}	
					<div className='hidden flex items-center justify-center gap-2'>
						<button className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
							See gallery
						</button>
						<button className="bg-sky-600 flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
						<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
						Download full programm
						</button>
					</div> 
				</div>
			</div>
		</section>
	)
}

export default Events
