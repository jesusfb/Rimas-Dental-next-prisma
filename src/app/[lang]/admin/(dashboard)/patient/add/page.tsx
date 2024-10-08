"use client";

import { InputComboMax } from "@/components";
import { NewPatientSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

type PatientData = z.infer<typeof NewPatientSchema>;
const AddPatients = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
		watch,
		control,
		getValues,
	} = useForm<PatientData>({
		resolver: zodResolver(NewPatientSchema),
	});

	const onSubmit = (data: PatientData) => {};

	return (
		<section className="min-h-screen bg-white dark:bg-gray-900">
			<div className="mx-auto flex w-full items-center p-8 lg:px-12">
				<div className="w-full">
					<h1 className="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white">
						Get your free account now.
					</h1>
					<p className="mt-4 text-gray-500 dark:text-gray-400">
						Let’s get you all set up so you can verify your personal account and begin setting up your profile.
					</p>
					<div className="mt-6">
						<h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>
						<div className="mt-3 md:-mx-2 md:flex md:items-center">
							<button
								type="button"
								className="flex w-full justify-center rounded-lg bg-blue-500 px-6 py-3 text-white focus:outline-none md:mx-2 md:w-auto"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span className="mx-2">client</span>
							</button>
							<button
								type="button"
								className="mt-4 flex w-full justify-center rounded-lg border border-blue-500 px-6 py-3 text-blue-500 focus:outline-none dark:border-blue-400 dark:text-blue-400 md:mx-2 md:mt-0 md:w-auto"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
								<span className="mx-2">worker</span>
							</button>
						</div>
					</div>
					<form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
						<InputComboMax
							register={register("name")}
							error={errors.name?.message}
							labelName="First Name"
							placeholder="mr."
						/>

						<InputComboMax
							register={register("email")}
							error={errors.email?.message}
							labelName="Email"
							placeholder="example@gmail.com"
						/>
						<InputComboMax
							register={register("phone1")}
							error={errors.phone1?.message}
							labelName="Contact Number"
							placeholder="XXX-XX-XXXX-XXX"
						/>
						<InputComboMax
							register={register("address")}
							error={errors.address?.message}
							labelName="address"
							placeholder="example: Dhaka"
						/>
						<InputComboMax
							register={register("password")}
							error={errors.password?.message}
							labelName="password"
							placeholder="Enter your password"
						/>

						<button className="flex w-full transform items-center justify-between rounded-lg bg-blue-500 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
							<span>Sign Up </span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 rtl:-scale-x-100"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddPatients;
