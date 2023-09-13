import React, { ChangeEvent, useState } from 'react';

export default function Login() {
	localStorage.setItem(
		'spinkodes-token',
		'2089yrqh9btoty78q74ryqr9ohq4efg9438g7q8790fghq'
	);
	const [formState, setFormState] = useState({
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
		<div className="text-white w-full mt-12 h-full ">
			<form className="flex w-full flex-col gap-12">
				{/* Email */}
				<div className="flex flex-col w-full md:max-w-[400px]">
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

				<button
					disabled={checkIfAllFieldsAreFilled.length > 0}
					type="submit"
					className="rounded disabled:opacity-40 hover:opacity-90 transition-opacity max-w-[200px] p-3 bg-white/90 font-semibold text-black/70"
				>
					Sign In
				</button>
			</form>
		</div>
	);
}
