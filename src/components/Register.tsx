/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';

import React, { ChangeEvent, useState } from 'react';

export default function Register() {
	const [termsState, setTermsState] = useState(false);
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		password: '',
	});

	/** To check if all the form fields are filled - intended to make sure
	 * all fields are filled before the user is allowed to submit
	 */
	const checkIfAllFieldsAreFilled = Object.values(formState).filter(
		(field) => field === ''
	);

	function handleForm(name: keyof typeof formState) {
		return (e: ChangeEvent<HTMLInputElement>) => {
			setFormState((prevState) => ({
				...prevState,
				[name]: e.target.value,
			}));
		};
	}

	return (
		<div className="text-white mt-12">
			{' '}
			<form className="flex flex-col gap-12">
				{/* Full name */}
				<div className="flex flex-col md:max-w-[400px]">
					<label
						className="uppercase"
						htmlFor="name"
					>
						<span className="text-sm text-white/90 font-semibold">
							Name
						</span>
					</label>
					<input
						onChange={handleForm('name')}
						type="text"
						minLength={3}
						required
						name="name"
						id="name"
						className="pl-2 bg-transparent border-b-2 text-white/80 placeholder:text-white/80 placeholder:text-sm border-white/40 outline-none pt-4"
						placeholder="Enter your full name"
					/>
				</div>

				{/* Email */}
				<div className="flex flex-col md:max-w-[400px]">
					<label
						className="uppercase"
						htmlFor="email"
					>
						<span className="text-sm text-white/90 font-semibold">
							Email
						</span>
					</label>
					<input
						onChange={handleForm('email')}
						type="email"
						required
						name="email"
						id="email"
						className="pl-2 bg-transparent border-b-2 text-white/80 placeholder:text-white/80 placeholder:text-sm border-white/40 outline-none pt-4"
						placeholder="Enter your email address"
					/>
				</div>

				{/* Password */}
				<div className="flex flex-col w-full md:max-w-[400px]">
					<label
						className="uppercase"
						htmlFor="password"
					>
						<span className="text-sm text-white/90 font-semibold">
							Password
						</span>
					</label>
					<input
						onChange={handleForm('password')}
						type="password"
						minLength={8}
						required
						name="password"
						id="password"
						className="pl-2 bg-transparent border-b-2 text-white/80 placeholder:text-white/80 placeholder:text-sm border-white/40 outline-none pt-4"
						placeholder="Enter your password"
					/>
				</div>

				{/* Terms and condition agreement */}
				<div className="w-full flex items-center gap-2">
					<span
						role="button"
						tabIndex={-1}
						onKeyDown={() => ''}
						aria-checked={termsState}
						onClick={() => setTermsState(!termsState)}
						className="flex h-4 w-4 rounded border [&[aria-checked='true']]:bg-white transition-all"
					/>
					<span className="text-white/70 text-xs">
						I agree to the terms and conditions
					</span>
				</div>

				{/* Sign up button */}
				<button
					disabled={
						!termsState || checkIfAllFieldsAreFilled.length > 0
					}
					type="submit"
					className="rounded hover:opacity-90 disabled:opacity-40 transition-opacity max-w-[200px] p-3 bg-white/90 font-semibold text-black/70"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}
