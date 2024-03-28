"use client"

import { useState, useEffect } from 'react'
import React from 'react'
import Reveal from './reveal'
import { Chrono } from "react-chrono";
const Events = () => {

	const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true); // Component has mounted, update state to trigger re-render   
}, []);

	const items=[
			{
				title: "9:30-10:45",
				cardTitle: "Регистрация участников, утренний кофе",
				cardSubtitle:"Обмен памятными подарками, общее фото",
				cardDetailedText: (
					<div className='mydeailcard'>
						Приветствие в адрес участников конференции от имени СБАТC  Модератор – Марат Байтоков
						<br />
						10.00-10.05 Бахтияр Хамидов Генеральный директор Ассоциации Банков Узбекистана<br />
						10.05-10.10 Закир Нуриев Президент Ассоциации Банков Азербайджана <br />
						<br/>Обмен памятными подарками, общее фото
					</div>
				),
			},
			{
			title: "10:45-11:45",
			cardTitle: "Сессия 1 – ФИНТЕХ И БАНКИ",
			cardSubtitle: `Кофе брейк`,
			cardDetailedText: (
				<div className='mydeailcard'>
				</div>
			),
			},
			{
			title: "11:45-12:00",
			cardTitle: "Кофе брейк",
			cardSubtitle: ``,
			cardDetailedText: ``,
			},
			{
				title: "12:00-13:00",
				cardTitle: "Сессия 2 – ЦИФРОВЫЕ ДЕНЬГИ И БАНКИ  ",
				cardSubtitle: ``,
				cardDetailedText: ``,
			},
			{
				title: "13:00-14:00",
				cardTitle: "Обед",
				cardSubtitle: ``,
				cardDetailedText: ``,
			},
			{
				title: "14:00-15:00",
				cardTitle:"Сессия 3 – АНТИФРОД",
				cardSubtitle: ``,
				cardDetailedText: ``,
			},
			{
				title: "14:00-15:00",
				cardTitle:"Кофе брейк",
				cardSubtitle: ``,
				cardDetailedText: ``,
			},
			{
				title: "15:30-17:30",
				cardTitle:"Сессия 4 – ПОПУЛЯРИЗАЦИЯ ИСЛАМСКОГО БАНКИНГА",
				cardSubtitle: ``,
				cardDetailedText: ``,
			}, 
		]

	return (
		<section id='events' className='container-fluid mb-32 scroll-mt-[160px]'>
			<Reveal>
				<div className='w-2/3 text-center mx-auto'>
					<h1 className='text-2xl lg:text-3xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 text-center'>
						Finance trends – FinTech and banks, anti-fraud, popularization of Islamic banking
					</h1>
					<h1 className='text-2xl lg:text-3xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 mb-10 text-center'>May 7, 2024</h1>
				<h1 className='text-3xl lg:text-4xl leading-9 md:leading-7 lg:leading-9 text-gray-800 mb-10 text-center'>
					Event program
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
