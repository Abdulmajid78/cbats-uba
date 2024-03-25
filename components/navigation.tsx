'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FiMenu } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineLanguage } from 'react-icons/md'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar'
import { navigationList } from '@/lib/data'
import { ScrollUp } from '@components/index'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

import { useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'



const Navigation = () => {
	const langsList = ['EN', 'UZ', 'РУ']
	const [lang, setLang] = useState(langsList[0])

	return (
		<div
			style={{ background: 'rgb( 0, 168, 207)' }}
			className='w-full h-60 backdrop-blur-sm sticky z-30 py-1 left-0 top-0'
		>
			<div className='container h-60 py-2 flex justify-between items-center'>
				{/* logo start */}
				<Link
					href='/'
					className='lg:w-[170px] w-32 flex flex-col items-center cursor-pointer relative'
				>
					<Image
						src='/images/logo.png'
						width='0'
						height='0'
						sizes='100vw'
						className='w-auto h-30 mb-1'
						alt='hero image'
						priority={true}
					/>
				</Link>
				{/* logo end */}
				<div className='flex items-center gap-10'>
					<ul className='lg:flex hidden text-white gap-6 items-center'>
						{navigationList.map(item => (
							<li key={item.link}>
								<Link
									href={`/${item.link}`}
									className='lg:text-2xl md:text-base cursor-pointer'
								>
									{item.name}
								</Link>
							</li>
						))}
						{/* contact */}
						<Sheet>
							<SheetTrigger className='text-white lg:text-2xl block text-lg'>
								Contact
							</SheetTrigger>
							<SheetContent className='!max-w-[600px] bg-white flex flex-col gap-10 p-20'>
								<h1 className='text-4xl mt-10'>Contact Us</h1>
								<div className='text-xl'>
									<p>
										<span className='font-bold'>Phone number:</span> +998 78
										147-77-77
										<br />
										+998 78 777-77-34
									</p>
									<br />
									<p>
										<span className='font-bold'>Address:</span> Адрес: 100011,
										Республика Узбекистан, г. Ташкент, ул. Навои, 38
									</p>
									<br />
									<p>
										<span className='font-bold'>Email: </span>info@eastwest.com
									</p>
								</div>
							</SheetContent>
						</Sheet>

				{/* reg */}
						<Sheet>
							<SheetTrigger className='text-white lg:text-2xl block text-lg'>
								Registration
							</SheetTrigger>
							<SheetContent className='!max-w-[900px] bg-white flex flex-col gap-10 p-20'>
								<h1 className='text-4xl mt-10'>Registrate now</h1>
								<div className={cn('grid gap-3')}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            
		  <Input
                id="company"
                placeholder="Company name"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
              />	
			  
			  <Input
                id="fullname"
                placeholder="Full name"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
              />

<Input
                id="phone"
                placeholder="Phone"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
              />

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            
          </div>
          <button className={cn(buttonVariants())}>
		  Create an Account
          </button>
        </div>
      </form>
    </div>
							</SheetContent>
						</Sheet>
						
					</ul>
					<Menubar className='lg:block hidden'>
						<MenubarMenu>
							<MenubarTrigger className='h-[30px] outline-none'>
								<p className='lg:text-2xl md:text-base flex gap-1 items-center text-white'>
									<span>
										<MdOutlineLanguage />
									</span>
									{lang}
									<span className={cn('scale-150 transition-all')}>
										<RiArrowDropDownLine />
									</span>
								</p>
							</MenubarTrigger>
							<MenubarContent className='min-w-[70px] text-center'>
								{langsList.map(langItem => (
									<MenubarItem
										onClick={() => setLang(langItem)}
										key={langItem}
										className='flex gap-2 text-lg px-5 cursor-pointer'
									>
										{langItem}
									</MenubarItem>
								))}
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
				<Sheet>
					<SheetTrigger className='text-white lg:hidden block'>
						<FiMenu fontSize='35px' />
					</SheetTrigger>
					<SheetContent className='max-w-[400px] w-full bg-secondary text-white flex flex-col gap-16  overflow-y-scroll'>
						<nav className='flex flex-col gap-6 mt-14'>
							{navigationList.map(item => (
								<SheetClose asChild key={item.link}>
									<Link
										href={item.link}
										className='text-lg cursor-pointer border-b border-white'
									>
										{item.name}
									</Link>
								</SheetClose>
							))}
							<Sheet>
								<SheetTrigger className='text-white block text-lg text-start cursor-pointer border-b border-white'>
									Contact
								</SheetTrigger>
								<SheetContent className='sm:!max-w-[600px] !max-w-[400px] w-full bg-white flex flex-col gap-10 sm:p-20 p-10 overflow-y-scroll'>
									<h1 className='text-4xl mt-10'>Contact Us</h1>
									<div className='text-xl'>
										<p>
											<span className='font-bold'>Phone number:</span> +998 78
											147-90-90
											<br />
											+998 78 247-17-34
										</p>
										<br />
										<p>
											<span className='font-bold'>Address:</span> Адрес: 100011,
											Республика Узбекистан, г. Ташкент, ул. Навои, 38
										</p>
										<br />
										<p>
											<span className='font-bold'>Email: </span>
											info@eastwest.com
										</p>
									</div>
								</SheetContent>
							</Sheet>
						</nav>
						<div className='flex gap-2'>
							<Button variant={'default'}>Russian</Button>
							<Button variant={'default'}>English</Button>
							<Button variant={'default'}>Uzbek</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

export default Navigation
