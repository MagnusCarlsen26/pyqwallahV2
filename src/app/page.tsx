"use client"

import { useState } from "react";
import { PropagateLoader } from "react-spinners"

import ExamSelector from "./_components/home/ExamSelector";
import VantaBackground from "./_components/home/VantaBackground";

export default function Home() {

  const [isVantaLoaded, setIsVantaLoaded] = useState<boolean>(false)

  return (
    // TODO: Am I using right semantics?
    <main className="relative isolate flex min-h-screen overflow-hidden bg-background text-center">
      <VantaBackground onReady={() => setIsVantaLoaded(true)} />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-16">
        {!isVantaLoaded ? <PropagateLoader color="#cad5e2" /> :
          <>
            <h1 className="mb-8 bg-linear-to-r from-lime-300 via-green-400 to-white bg-clip-text font-display text-5xl font-extrabold tracking-[0.18em] text-transparent drop-shadow-[0_0_30px_rgba(57,255,20,0.35)] sm:text-6xl lg:text-7xl">
              PYQ WALLAH
            </h1>
            <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              India&apos;s best website for practicing{" "}
              <span className="text-ink font-semibold text-glow drop-shadow-[0_0_12px_rgba(57,255,20,0.22)]">
                Previous Year Questions
              </span>
            </p>
            <ExamSelector />
          </>
        }
      </div>
    </main>
  );
}
