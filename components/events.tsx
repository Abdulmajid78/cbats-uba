"use client"

import { useState, useEffect } from 'react'
import React from 'react'
import Reveal from './reveal'
import { Chrono } from "react-chrono";
import { useTranslations } from 'next-intl';
const Events = () => {

	const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true); // Component has mounted, update state to trigger re-render   
}, []);

	const items=[
			{
				title: "9:30-10:45",
				cardDetailedText: (
					<div className='mydeailcard p-6'>
						9.30-10.00 Регистрация участников, утренний кофе. <br/>
						Приветствие в адрес участников конференции от имени СБАТC  Модератор – Марат Байтоков
						<br />
						10.00-10.05 Бахтияр Хамидов Генеральный директор Ассоциации Банков Узбекистана<br />
						10.05-10.10 Закир Нуриев Президент Ассоциации Банков Азербайджана <br />
						10.30-10.45 Обмен памятными подарками, общее фото
					</div>
				),
			},
			{
				title: "10:45-11:45",
				cardDetailedText: (
					<div className='mydeailcard p-6'>
						Сессия 1 – ФИНТЕХ И БАНКИ <br />Модератор – Отабек Насыров, заместитель Председателя Ассоциации Финтех Узбекистан<br />
						10.45-11.00 Какие перемены ждут банковскую систему Узбекистана Ксения Константинова, директор международной консалтинговой компании Senteo в регионах Центральной Азии и Ближнего Востока <br />
						11.00-11.15 <br />Тема 2 <br />Юнус Абдулов, Исполнительный директор Ассоциации Банков Азербайджана <br />
						Тема 3 <br /> Вулкан Гулдурмез, Председатель правления Ziraat Bank Uzbekistan <br />
						11.30-11.45 ABCDE Цифровой банкинг Орландо Кастелланос – Главный директор по инновациям (CINO), NETinfo (Кипр) <br />
					</div>
				),
			},
			{
			title: "11:45-12:00",
			cardDetailedText: (
						<div className='mydeailcard p-6 text-center'>
							Кофе брейк
						</div>
					),
			},
			{
				title: "12:00-13:00",
				cardDetailedText: (
							<div className='mydeailcard p-6'>
								Сессия 2 – ЦИФРОВЫЕ ДЕНЬГИ И БАНКИ <br />Модератор – <br />
								12.00-12.15 Влияние цифровых национальных валют на эмиссионную политику Центральных банков АО “БанкЦентрКредит” <br />
								12.15-12.30Обзор законодательной и регуляторной основы цифровых денег в Узбекистане НАПП <br />
								12.30-12.45 Тема 3 Хамори Река – Ассоциация банков Венгрии <br />
			 					12.45-13.00 Тема 4 Банки РУз
			 				</div>
						),
			},
			{
				title: "13:00-14:00",
				cardDetailedText: (
					<div className='mydeailcard p-6 text-center'>
						Обед
					</div>
				),
			},
			{
				title: "14:00-15:00",
				cardDetailedText: (
					<div className='mydeailcard p-6'>
						Сессия 3 – АНТИФРОД <br />Модератор: Роман Корбут – Менеджер по развитию бизнеса. <br /> LexisNexis Risk Solutions<br />
						14.00-14.15 Тема 1 <br /> Центральный банк Республики Узбекистан (не согласовано)  <br />
						14.15-14.30 Тема 2 <br /> Платёжные системы, провайдеры. (UzCard, Humo, PayMe и т.д.)  <br /> 
						14.30-14.45 Тема 3 <br /> Зенон Амтманн – OTB Bank Венгрия <br />
						14.45-15.00 Тема 4 <br />Роман Корбут - Менеджер по развитию бизнеса. LexisNexis Risk Solutions <br />
					</div>
						),
			},
			{
				title: "15:00-15:30",
				cardDetailedText: (
					<div className='mydeailcard p-6 text-center'>
						Кофе брейк
					</div>
				),
			},
			{
				title: "15:30-17:30",
				cardDetailedText: (
					<div className='mydeailcard p-6'>
						Сессия 4 – ПОПУЛЯРИЗАЦИЯ ИСЛАМСКОГО БАНКИНГА<br /> Модератор – Фатма Чинар, Ассоциация Банков Участников Турции <br />
						15.30-15.45 Подходы продвижения и популяризации Исламских финансов на государственном и корпоративном уровнях. <br />
						Ёркулов Умиджон - сотрудник-ассистент менеджера IFAAS (Консультационные и гарантийные услуги по исламским финансам)  <br /> 
						15.45-16.00 Развитие исламского финансирования в тюркских странах Фатма Чинар, Ассоциация Банков Участников Турции<br />
						16.00-16.15 Тема 3 АльХуда ЦИБДЭ <br />
						16.15-16.30 Тема 4 Банки РУз <br />
						17.00-17.30 Заключительное слово, фотографирование
					</div>
				),
			}, 
		]

		const t = useTranslations("Index")

	return (
		<section id='events' className='container-fluid mb-32 scroll-mt-[180px]'>
			<Reveal>
				<div className='w-2/3 text-center mx-auto'>
					<h1 className='text-2xl lg:text-3xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 text-center'>
						{t("FinanceTrends")}
					</h1>
					<h1 className='text-2xl lg:text-3xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800 mb-10 text-center'>
						May 7, 2024</h1>
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
