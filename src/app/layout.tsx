import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chibuikem I.",
  description: "Chibuikem Igboanugo - FrontEnd Developer",
  icons: {
    icon: "/beko.svg",
    shortcut: "/beko.svg",
    apple: "/beko.svg",
  },
  openGraph: {
    title: "Chibuikem I.",
    description: "Chibuikem Igboanugo - FrontEnd Developer",
    url: "https://chibuikemigboanugo.vercel.app",
    siteName: "Chibuikem I.",
    images: [
      {
        url: "https://chibuikemigboanugo.vercel.app/mine.png", // FULL URL
        width: 1200,
        height: 630,
        alt: "Chibuikem Igboanugo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibuikem I.",
    description: "Chibuikem Igboanugo - FrontEnd Developer",
    images: ["https://chibuikemigboanugo.vercel.app/mine.png"], // FULL URL
  },  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/beko.svg" type="image/svg+xml" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
