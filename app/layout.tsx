import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjay Mahar - AI Engineer & Data Science Practitioner",
  description:
    "Computer Engineering student specializing in AI, Machine Learning, and Data Science. Building intelligent systems with Python, TensorFlow, and Computer Vision.",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Python Developer", "Computer Vision", "Sanjay Mahar"],
  authors: [{ name: "Sanjay Mahar", url: "https://github.com/saxonmahar" }],
  creator: "Sanjay Mahar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjaymahar.com",
    title: "Sanjay Mahar - AI Engineer & Data Science Practitioner",
    description: "Computer Engineering student specializing in AI, Machine Learning, and Data Science",
    siteName: "Sanjay Mahar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Mahar - AI Engineer & Data Science Practitioner",
    description: "Computer Engineering student specializing in AI, Machine Learning, and Data Science",
    creator: "@saxonmahar",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
