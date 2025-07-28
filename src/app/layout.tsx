import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chibuikem I.",
  description: "Chibuikem Igboanugo -FrontEnd Developer",
  icons: {
    icon: "/beko.svg",
    shortcut: "/beko.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
