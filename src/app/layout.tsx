import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chibuikem Igboanugo - Frontend Developer",
    template: "%s | Chibuikem Igboanugo"
  },
  description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive, and performant web applications.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "UI/UX", "JavaScript"],
  authors: [{ name: "Chibuikem Igboanugo" }],
  creator: "Chibuikem Igboanugo",
  publisher: "Chibuikem Igboanugo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/beko.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/beko.svg",
    apple: "/beko.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chibuikemigboanugo.vercel.app",
    siteName: "Chibuikem Igboanugo Portfolio",
    title: "Chibuikem Igboanugo - Frontend Developer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive, and performant web applications.",
    images: [
      {
        url: "https://chibuikemigboanugo.vercel.app/mine.png",
        width: 1200,
        height: 630,
        alt: "Chibuikem Igboanugo - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibuikem Igboanugo - Frontend Developer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["https://chibuikemigboanugo.vercel.app/mine.png"],
    creator: "@chibuikemigboanugo",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
