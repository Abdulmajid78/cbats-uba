'use client'

import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import axios from "axios"
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

const RegistrationComponent: React.FC = () => {

	const [companyName, setCompanyName] = React.useState('')
	const [fullName, setFullName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [email, setEmail] = React.useState('')

	const t = useTranslations("Index")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(companyName, fullName, phone, email)
		const data = {
			Company_name: companyName,
			Full_name: fullName,
			Phone: phone,
			Email: email
		}

		axios.post("https://sheet.best/api/sheets/dee5dc6a-caa5-4db2-8e29-e1f45dcbab3c", data)
		.then((response)=> {
			console.log(response);
			setCompanyName('');
			setFullName('');
			setPhone('');
			setEmail('');
		})
		.catch((error)=>{
			console.log(error)
		})
	}

	return (
		<section id="registration" className="container mb-32 scroll-mt-[190px]">
			<div className="bg-[#F5F7F8] rounded-xl w-full overflow-hidden flex gap-8 content-center items-center xl:p-10 p-4">
				<div className="text-center flex flex-col items-center w-full">
					<div className="w-full bg-white flex flex-col gap-10 xl:p-16 px-2">
						<h1 className="text-4xl mt-10 ">{t("RegistrateNow")}</h1>
						<div className={cn('grid gap-3')}>
							<form className='form ' onSubmit={handleSubmit}>
								<div className="grid gap-3">
									<div className="grid gap-2 ">
										<Input
											id="company"
											placeholder={t("CompanyName")}
											type="text"
											name='CompanyName'
											autoCapitalize="none"
											autoCorrect="off"
											value={companyName}
											onChange={(e)=>setCompanyName(e.target.value)}
										/>

										<Input
											id="fullname"
											placeholder={t("FullName")}
											name='FullName'
											type="text"
											autoCapitalize="none"
											autoCorrect="off"
											value={fullName}
											onChange={(e)=>setFullName(e.target.value)}
										/>

										<Input
											id="phone"
											placeholder={t("Phone")}
											name='Phone'
											type="text"
											autoCapitalize="none"
											autoCorrect="off"
											value={phone}
											onChange={(e)=>setPhone(e.target.value)}
										/>

										<Input
											id="email"
											placeholder="name@example.com"
											type="email"
											name='Email'
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											value={email}
											onChange={(e)=>setEmail(e.target.value)}
										/>

									</div>
									<button type='submit' className={cn(buttonVariants())}>
										{t("SendInfo")}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RegistrationComponent;
