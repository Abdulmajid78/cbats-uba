'use client'
import Image from 'next/image'
import React, { useState, useEffect, ChangeEvent } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineLanguage } from 'react-icons/md'
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent
} from '@/components/ui/menubar'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { navigationListType } from '../lib/types';
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MenubarItem } from '@radix-ui/react-menubar'
import { cn } from '@/lib/utils'


const Navigation = () => {

	const t = useTranslations("Index")

	const navigationList: navigationListType[] = [
		{ name: t('Events'), link: '#events' },
		{ name: t('Speakers'), link: '#speakers' },
		{ name: t('Registration'), link: '#registration' },
		{ name: t('Partners'), link: '#partners' },
		{ name: t('News'), link: '#news' },
	]

	

	// const [isPending, startTransition] = useTranslations();
	const router = useRouter();
	const localActive = useLocale();
	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
			router.replace(`/${nextLocale}`)
	}

	const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setScrollHeight(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	return (
		<div
			style={{ background: 'linear-gradient(to bottom, rgba( 0, 168, 207,0.6), rgba( 0, 118, 207,1)) ,url(/images/glitter.png) ', }}
			className={`w-full py-1 left-0 top-0 sticky z-30 transition-all backdrop-blur-sm 
			${
                scrollHeight > 0 ? 'h-32' : 'h-56'
            }`}		>
			<div className="container-fluid lg:mx-48 my-5 md:my-0 flex justify-between items-center">
				{/* logo start */}
				<Link
					href="/"
					className={`flex flex-col items-center cursor-pointer relative ${scrollHeight > 0 ? "w-24" : "lg:w-[170px] w-32" }`}
				>
					<Image
						src="/images/logo-uba.png"
						width="0"
						height="0"
						sizes="100vw"
						className="w-auto h-30 mb-1"
						alt="hero image"
						priority={true}
					/>
				</Link>
				{/* logo end */}
				<div className="lg:flex hidden items-center gap-5">
					<ul className="flex text-white gap-6 items-center">
						{navigationList.map(item => (
							<li key={item.link}>
								<Link
									href={`/${item.link}`}
									className="lg:text-2xl md:text-base font-serif cursor-pointer"
								>
									{item.name}
								</Link>
							</li>
						))}
						{/* contact */}
						<Sheet>
							<SheetTrigger className="text-white lg:text-2xl font-serif block text-lg">
								{t("Contacts")}
							</SheetTrigger>
							<SheetContent className="!max-w-[600px] bg-white flex flex-col gap-10 p-20">
								<h1 className="text-4xl mt-10">{t("ContactUs")}</h1>
								<div className="text-xl">
									<p>
										<span className="font-bold">{t("Phone")}:</span> +998 71 238-69-61
									</p>
									<br />
									<p>
										<span className="font-bold">{t("Address")}: </span> 
											{t("RepublicOfUzbekistan")}
									</p>
									<br />
									<p>
										<span className="font-bold">{t("Email")}: </span>
										office@uba.uz
									</p>

									<div className='mt-14'>
										<iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.402551080744!2d69.2336180576416!3d41.312112800000115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba72319fe35%3A0x13c479f0c40c00e7!2z0JDRgdGB0L7RhtC40LDRhtC40Y8g0LHQsNC90LrQvtCyINCj0LfQsdC10LrQuNGB0YLQsNC90LA!5e0!3m2!1sru!2s!4v1711557353948!5m2!1sru!2s" style={{border: 0}} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>

								</div>
							</SheetContent>
						</Sheet>


					</ul>
					<Menubar className="lg:block hidden">
						<MenubarMenu>
							

<Menubar className='lg:block hidden'>
						<MenubarMenu>
							<MenubarTrigger className='h-[30px] outline-none'>
								<p className='lg:text-2xl md:text-base  flex gap-1 items-center text-white font-serif'>
									<span>
										<MdOutlineLanguage />
									</span>
									{localActive === 'en' ? 'EN' : localActive === 'ru' ? 'РУ' : 'O\'Z'}
									<span className={cn('scale-150 transition-all')}>
										<RiArrowDropDownLine />
									</span>
								</p>
							</MenubarTrigger>
							<MenubarContent className='min-w-[70px] text-center'>
    <MenubarItem
        onClick={() => onSelectChange({ target: { value: 'en' } } as React.ChangeEvent<HTMLSelectElement>)}
        className='flex gap-2 text-lg px-5 cursor-pointer'
    >
        EN
    </MenubarItem>
    <MenubarItem
        onClick={() => onSelectChange({ target: { value: 'ru' } } as React.ChangeEvent<HTMLSelectElement>)}
        className='flex gap-2 text-lg px-5 cursor-pointer'
    >
        РУ
    </MenubarItem>
    <MenubarItem
        onClick={() => onSelectChange({ target: { value: 'uz' } } as React.ChangeEvent<HTMLSelectElement>)}
        className='flex gap-2 text-lg px-5 cursor-pointer'
    >
        {"O\'z"}
    </MenubarItem>
</MenubarContent>
						</MenubarMenu>
					</Menubar>



						</MenubarMenu>
					</Menubar>
				</div>
				<Sheet>
					<SheetTrigger className="text-white lg:hidden block">
						<FiMenu fontSize="35px" />
					</SheetTrigger>
					<SheetContent
						className="max-w-[400px] w-full bg-sky-600 text-white flex flex-col gap-16  overflow-y-scroll">
						<nav className="flex flex-col gap-6 mt-14">
							{navigationList.map(item => (
								<SheetClose asChild key={item.link}>
									<Link
										href={item.link}
										className="text-lg cursor-pointer border-b border-white"
									>
										{item.name}
									</Link>
								</SheetClose>
							))}
							<Sheet>
								<SheetTrigger className="text-white block text-lg text-start cursor-pointer border-b border-white">
									{t("Contacts")}
								</SheetTrigger>
								<SheetContent
									className="sm:!max-w-[600px] !max-w-[400px] w-full bg-white flex flex-col gap-10 sm:p-20 p-10 overflow-y-scroll">
									<h1 className="text-4xl mt-10">{t("ContactUs")}</h1>
									<div className="text-xl">
										<p>
											<span className="font-bold">{t("Phone")}:</span> 
											+99871 238-69-61 
										</p>
										<br />
										<p>
											<span className="font-bold">{t("Address")}:</span> 
											{t("RepublicOfUzbekistan")}
										</p>
										<br />
										<p>
											<span className="font-bold">{t("Email")}: </span>
											<a href="mailto:office@uba.uz">office@uba.uz</a>
										</p>
									</div>
								</SheetContent>
							</Sheet>
						</nav>
						<div className="flex flex-row-reverse">
						<select defaultValue={localActive} 
						// disabled={isPending}
							className='navb-select bg-transparent h-[30px] outline-none font-serif' onChange={onSelectChange}>
							<option className='text-black' value="en">EN</option>
							<option className='text-black' value="uz">UZ</option>
							<option className='text-black' value="ru">РУ</option>
						</select>
						</div>
					</SheetContent>
				</Sheet>

				{/* logo start */}
				<Link
					href="/"
					className={`flex flex-col items-center cursor-pointer relative ${scrollHeight > 0 ? "w-24" : "lg:w-[170px] w-32" }`}
				>
					<Image
						src="/images/logo.png"
						width="0"
						height="0"
						sizes="100vw"
						className="w-auto h-30 mb-1"
						alt="hero image"
						priority={true}
					/>
				</Link>
				{/* logo end */}
			</div>
		</div>
	)
}

export default Navigation
