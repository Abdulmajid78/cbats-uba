'use client'

import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import axios from "axios"
import { Input } from '@/components/ui/input'

const Registration = () => {

	function Submit(e) {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData();
		formData.append('CompanyName', form[0].value);
		formData.append('FullName', form[1].value);
		formData.append('Phone', form[2].value);
		formData.append('Email', form[3].value);
	
		console.log(formData);
		axios.post("https://script.google.com/macros/library/d/1C3D_sof_XuVnJ6KduMLLBp-kl1theSFnXqJgHiREr5ZCYPgLOWIP5l27/1", formData)
			.then((response) => {
				console.log(response);
				// Optionally, you can reset the form after successful submission
				form.reset();
			}).catch((error) => {
				console.log(error);
			});
	}

	return (
		<section id="registration" className="container mb-32 scroll-mt-[240px]">


			<div className="bg-[#F5F7F8] rounded-xl w-full overflow-hidden flex gap-8 content-center items-center p-10">
				<div className="text-center flex flex-col items-center w-full">
					
						<div className="w-full bg-white flex flex-col gap-10 p-16">
							<h1 className="text-4xl mt-10">Registrate now</h1>
							<div className={cn('grid gap-3')}>
								<form className='form' onSubmit={(e) => Submit(e)}>
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

// "use client"

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
// 	const [name, setName] = useState('');
// 	const [age, setAge] = useState('');
// 	const [salary, setSalary] = useState('');
// 	const [hobby, setHobby] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const objt = { name, age, salary, hobby };

// 		axios
// 			.post(
// 				'https://sheet.best/api/sheets/8abefc9d-5af1-4c54-b1c3-e010462fd81a',
// 				objt
// 			)
// 			.then((response) => {
// 				console.log(response);
// 			});
// 	};

// 	return (
// 		<div className="container-fluid">
// 			<h2>React google sheet</h2>
// 			<form className="form">
				
// 					<label>Name</label>
// 					<input
// 						placeholder="Enter your Name"
// 						onChange={(e) => setName(e.target.value)}
// 					/>
				
// 					<label>Age</label>
// 					<input
// 						placeholder="Enter your Age"
// 						onChange={(e) => setAge(e.target.value)}
// 					/>
				
// 					<label>Salary</label>
// 					<input
// 						placeholder="Enter your Salary"
// 						onChange={(e) => setSalary(e.target.value)}
// 					/>
				
// 					<label>Hobby</label>
// 					<input
// 						placeholder="Enter your Hobby"
// 						onChange={(e) => setHobby(e.target.value)}
// 					/>
				

// 				<button color="blue" type="submit" onClick={handleSubmit}>
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

// export default App;