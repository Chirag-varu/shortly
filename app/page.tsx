import React from 'react';
import { HowItWorksSection } from "../components/HowItWorksSection";
import Link from 'next/link';
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-full md:px-8">
        <section className="grid h-[50vh] place-items-center">
          <div className="flex flex-col gap-4 items-center text-center">
            <p className={`text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className}`}>
              The best URL shortener in the Market
            </p>
            <p className="max-w-2xl px-4 md:px-12 lg:px-16">
              We are the most straightforward URL shortener in the world. Most URL shorteners will track you or ask for your details to log in. We understand your needs, so we have created this URL shortener.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link href="/try">
                <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-purple-600 transition">
                  Try Now
                </button>
              </Link>
              <Link href="https://github.com/Chirag-varu" target="_blank">
                <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-purple-600 transition">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HowItWorksSection />
    </div>
  );
}
