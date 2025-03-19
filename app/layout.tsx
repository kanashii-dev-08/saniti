import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

interface RootLayoutProps {
	children: ReactNode;
}

const fontSans = Plus_Jakarta_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Saniti | Patient Management System",
	description:
		"Saniti empowers healthcare providers with secure patient record management, appointment tracking, and care coordination for improved outcomes.",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
