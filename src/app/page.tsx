import ExamSelector from "./_components/home/ExamSelector";

export default function Home() {

  return (
    // TODO: Am I using right semantics?
    <main className="flex h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="mb-10 bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent lg:text-7xl">
        PYQ WALLAH
      </h1>
      <ExamSelector />
    </main>
  );
}
