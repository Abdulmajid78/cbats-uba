"use client"
import React, { useEffect, useState } from 'react';
import Reveal from './reveal';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const speakers = [
    { name: 'Speaker 1', image: '/images/user-picture.png' },
    { name: 'Speaker 2', image: '/images/user-picture.png' },
    { name: 'Speaker 3', image: '/images/user-picture.png' },
    { name: 'Speaker 4', image: '/images/user-picture.png' },
    { name: 'Speaker 5', image: '/images/user-picture.png' },
    { name: 'Speaker 6', image: '/images/user-picture.png' },
    { name: 'Speaker 7', image: '/images/user-picture.png' },
    { name: 'Speaker 8', image: '/images/user-picture.png' },
];

const responsive = {
    0: { 
        items: 2
    },
    568: { 
        items: 4
    },
    1024: {
        items: 7, 
        itemsFit: 'contain'
    },
};

const Speakers = () => {

    const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true); // Component has mounted, update state to trigger re-render   
}, []);

    const items = speakers.map((speaker, index) => (
        <div key={index} className='speaker-item'>
            <Image 
                width={100}
                height={100}
                className='w-40 mx-auto' 
                src={speaker.image} 
                alt={speaker.name} role="presentation" />
            <p className='text-sm mt-3 text-center'>{speaker.name}</p>
        </div>
    ));

    const t = useTranslations("Index")

    return (
        <section id='speakers' className='container-fluid mb-32 scroll-mt-[255px]'>
            <Reveal>
                <div className='w-2/3 text-center mx-auto'>
                    <h1 className='text-2xl my-5 lg:text-3xl font-serif font-bold leading-9 md:leading-7 lg:leading-9 text-gray-800 text-center'>
                        {t("OURSPEAKERS")}
                    </h1>
                </div>
            </Reveal>

            <div className='bg-[#F5F7F8] w-full xl:py-32 py-24 rounded-xl overflow-hidden flex gap-8 items-center p-10'>
                <div className='text-center w-full flex flex-col gap-2'>
                {isClient && (
                    <AliceCarousel
                        mouseTracking
                        responsive={responsive}
                        autoPlay
                        autoPlayInterval={900}
                        animationDuration={1000}
                        infinite
                        disableDotsControls
                        disableButtonsControls
                        items={items}
                    />
                )}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
