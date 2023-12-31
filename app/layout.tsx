import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Suspense } from "react";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Pro",
  description: "Your favorite anime & manga, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="w-full ">
          <Providers>
            <Header />
            <section className="max-w-7xl mx-auto bg-[#0F1117]">
              <Hero />
              {children}
            </section>
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
