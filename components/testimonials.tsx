'use client'

import { testimonials as testimonialsUser } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { GrPrevious, GrNext } from 'react-icons/gr'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Reveal from './reveal'


const Testimonials = () => {
	

	return (
		<section
			id='testimonials'
			className='container-fluid mb-7 scroll-mt-[90px] pb-10'
		>
			<div className='relative'>
				<Swiper
					slidesPerView={1}
					slidesPerGroup={1}
					loop={true}
					direction={'horizontal'}
					autoplay={{
						delay: 4000,
					}}
					breakpoints={{
						640: {
							slidesPerView: 4,
							slidesPerGroup: 1,
							loop: true,
						},
					}}
					grabCursor={true}
					modules={[Autoplay,Pagination, Navigation]}
					
				
					className='mySwiper w-full mx-auto !pb-10 mt-2'
				>
					{testimonialsUser.map((user, i) => (
						<SwiperSlide
							key={i}
							className='flex flex-col max-w-[512px] w-full rounded-xl mx-[4px] h-40 bg-gray-200'
						>
							<div className='p-5 pb-0 items-center'>
								<div>
									<Reveal y={40}>
										<h3 className='text-xl text-center p-5 h-[100px] mb-1'>{user.name}</h3>
									</Reveal>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				
			</div>
		</section>
	)
}
export default Testimonials
