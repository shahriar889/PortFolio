import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Shahriar's Portfolio",
  description: "A portfolio website showcasing the projects and skills of Shahriar, a recent computer science graduate from Simon Fraser University."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >

<body className={`${playfair.className} antialiased min-h-screen flex flex-col bg-[#f8faff]`}>
        {children}
      </body>
    </html>
  );
}
