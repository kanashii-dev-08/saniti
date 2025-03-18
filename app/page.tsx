import PatientForm from "@/components/forms/PatientForm";
import { ToggleTheme } from "@/components/toggle-theme";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						src="/assets/icons/logo-full.svg"
						height={1000}
						width={1000}
						alt="patient"
						className="mb-12 h-10 w-fit"
					/>
					<ToggleTheme />
					<PatientForm />
					<div className="text-14-regular mt-20 flex justify-between">
						<p className="justify-items-center text-dark-600 xl:text-left">
							&copy; 2025 Saniti Health. All rights reserved.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
