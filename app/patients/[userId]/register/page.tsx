import RegisterForm from "@/components/forms/RegisterForm";
import { ToggleTheme } from "@/components/toggle-theme";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params }: SearchParamProps) => {
	const { userId } = await params;
	const user = await getUser(userId);

	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<div className="flex justify-between">
						<Image
							src="/assets/icons/logo-full.svg"
							height={1000}
							width={1000}
							alt="patient"
							className="mb-12 h-10 w-fit invert dark:invert-0"
						/>
						<ToggleTheme />
					</div>

					{user && <RegisterForm user={user} />}
					<div className="text-[14px] font-normal mt-20 flex justify-between">
						<p className="justify-items-center text-dark-600 xl:text-left">
							&copy; 2025 Saniti Health. All rights reserved.
						</p>
						<Link href="/?admin=true" className="text-green-500">
							Admin
						</Link>
					</div>
				</div>
			</section>
			<Image
				src="/assets/images/register-img.png"
				height={1000}
				width={1000}
				alt="patient"
				className="side-img max-w-[390px]"
			/>
		</div>
	);
};

export default Register;
