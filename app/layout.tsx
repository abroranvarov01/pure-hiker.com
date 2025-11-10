import type React from "react"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-sans",
})

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-serif",
})

export const metadata = {
	title: "Pure Hiker - Smart Water Filtration for Limitless Adventures",
	description: "Drink clean. Wander freely. Advanced water filtration systems for hikers and outdoor enthusiasts.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
