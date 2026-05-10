import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "PYQ Wallah",
  description: "Best PYQ Practice app in India",
  // TODO: Add Favicon
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${sora.variable}`}>
      <body className="m-0 bg-background text-ink antialiased font-sans">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
