
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flávio Mendonça — Front-end Developer",
  description: "Portfólio minimalista utilitário inspirado em Paco Coursey e Rauno Freiberg.",
  icons: {
    icon: "/assets/F.png",
    apple: "/assets/F.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-background text-foreground">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground min-h-screen`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
