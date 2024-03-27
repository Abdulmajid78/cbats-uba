'use client'

import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import axios from "axios"
import { Input } from '@/components/ui/input'

const Registration = () => {

	return (
		<section id="registration" className="container mb-32 scroll-mt-[240px]">


			<div className="bg-[#F5F7F8] rounded-xl w-full overflow-hidden flex gap-8 content-center items-center p-10">
				<div className="text-center flex flex-col items-center w-full">
					
						<div className="w-full bg-white flex flex-col gap-10 p-16">
							<h1 className="text-4xl mt-10">Registrate now</h1>
							<div className={cn('grid gap-3')}>
								<form className='form'>
									<div className="grid gap-3">
										<div className="grid gap-2">

											<Input
												id="company"
												placeholder="Company name"
												type="text"
												name='CompanyName'
												autoCapitalize="none"
												autoCorrect="off"
											/>

											<Input
												id="fullname"
												placeholder="Full name"
												name='FullName'
												type="text"
												autoCapitalize="none"
												autoCorrect="off"
											/>

											<Input
												id="phone"
												placeholder="Phone"
												name='Phone'
												type="text"
												autoCapitalize="none"
												autoCorrect="off"
											/>

											<Input
												id="email"
												placeholder="name@example.com"
												type="email"
												name='Email'
												autoCapitalize="none"
												autoComplete="email"
												autoCorrect="off"
											/>

										</div>
										<button type='submit' className={cn(buttonVariants())}>
											Send info
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

export default Registration