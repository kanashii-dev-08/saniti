import PatientForm from "@/components/forms/PatientForm";
import { ToggleTheme } from "@/components/toggle-theme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex h-screen max-h-screen">
			{/* TODO: OTP Verification | PasskeyModal */}
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<div className="flex justify-between">
						<Image
							src="/assets/icons/logo-full.svg"
							height={1000}
							width={1000}
							alt="patient"
							className="mb-12 h-10 w-fit"
						/>
						<ToggleTheme />
					</div>

					<PatientForm />
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
				src="/assets/images/onboarding-img.png"
				height={1000}
				width={1000}
				alt="patient"
				className="side-img max-w-[50%]"
			/>
		</div>
	);
}
