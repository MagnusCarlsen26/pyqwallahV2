"use client";

import type { EXAM_DETAIL } from "~/app/constants/types"

type ExamCardProps = {
  examName: EXAM_DETAIL,
  isSelected: boolean,
  onClick: () => void
}

export default function ExamCard({
  examName,
  isSelected,
  onClick
}: ExamCardProps) {
  return(
    // TODO: use button instead of div
    <button 
      type="button"
      aria-pressed={isSelected}
      // TODO: Should I use cvlx?
      // TODO: Should I have seperate variables for hover and non-hover state?
      className={`${isSelected ? 'border-glow' : 'border-subtle hover:border-glow hover:-translate-y-2'} border-2 rounded-2xl p-12 transition-all duration-300`}
      onClick={onClick}
    >
    <p className="text-ink font-bold text-2xl">{examName.displayName}</p>
    </button>
  )
}
