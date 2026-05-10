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
        className={`group ${isSelected ? 'border-glow' : 'border-subtle hover:border-glow'} border-2 rounded-2xl p-20 transition-all duration-300`}
        onClick={onClick}
      >
        <p className="text-ink font-bold text-2xl">{exam.displayName}</p>
        <p className={`flex justify-center items-center ${isSelected ? 'opacity-100 rotate-180' : 'opacity-0 rotate-0'}  group-hover:opacity-100 transition-all duration-300`}><FaChevronDown className="text-amber-50"/></p>
      </button>
  )
}
