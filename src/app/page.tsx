"use client"

import { useState } from "react";
import { EXAM_NAMES } from "./constants/businessConfig"
import ExamCard from "./_components/home/ExamCard";
import type { EXAM_DETAIL } from "./constants/types";

// TODO: Make this a proper client/server component
// "use client"
export default function Home() {
  const [selected, setSelected] = useState<null | EXAM_DETAIL["id"]>(null)
  
  return (
    // TODO: Am I using right semantics?
    <main className="flex h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="mb-10 bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent lg:text-7xl">
        PYQ WALLAH
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {EXAM_NAMES.map((examName) => 
          <ExamCard
            key={examName.id}
            examName={examName}
            isSelected={selected === examName.id}
            onClick={() => setSelected( prev => prev === examName.id? null : examName.id )}
          />)}
      </div>
    </main>
  );
}
