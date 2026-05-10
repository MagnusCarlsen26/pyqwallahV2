"use client";
import { FaChevronDown } from "react-icons/fa";

type ExamCardProps = {
  exam: {
    id: string,
    displayName: string
  },
  isSelected: boolean,
  onClick: () => void
}

export default function ExamCard({
  exam,
  isSelected,
  onClick
}: ExamCardProps) {
  return(
      <button
        id={exam.id}
        type="button"
        aria-pressed={isSelected}
        // TODO: Should I use cvlx?
        // TODO: Should I have seperate variables for hover and non-hover state?
        className={`group flex min-w-40 flex-col items-center justify-center gap-3 rounded-3xl border px-8 py-10 transition-all duration-300 backdrop-blur-xl sm:px-10 sm:py-12 ${isSelected ? "border-glow bg-white/10 shadow-[0_0_0_1px_rgba(57,255,20,0.12),0_0_30px_rgba(57,255,20,0.18)]" : "border-white/10 bg-white/5 hover:border-glow hover:bg-white/10 hover:shadow-[0_0_30px_rgba(57,255,20,0.12)] hover:-translate-y-1"}`}
        onClick={onClick}
      >
        <p className="font-display text-2xl font-bold tracking-[0.18em] text-white sm:text-3xl">{exam.displayName}</p>
        <p className={`flex items-center justify-center transition-all duration-300 ${isSelected ? "rotate-180 opacity-100" : "rotate-0 opacity-0 group-hover:opacity-100"}`}>
          <FaChevronDown className="text-lime-200" />
        </p>
      </button>
  )
}
