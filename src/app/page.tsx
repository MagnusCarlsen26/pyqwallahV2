import ExamSelector from "./_components/home/ExamSelector";
import VantaBackground from "./_components/home/VantaBackground";

export default function Home() {

  return (
    // TODO: Am I using right semantics?
    <main className="relative isolate flex min-h-screen overflow-hidden bg-background text-center">
      <VantaBackground />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-16">
        <h1 className="mb-10 bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent lg:text-7xl">
          PYQ WALLAH
        </h1>
        <p className="text-ink">
          ~ India&apos;s best website for practicing Previous Year Questions
        </p>
        <ExamSelector />
      </div>
    </main>
  );
}
