"use client"

import { useState } from "react"

import ExamCard from "./ExamCard"
import { EXAM_CHOICES, type ExamChoice } from "../../constants/businessConfig"

export default function ExamSelector() {
  
  const [selected, setSelected] = useState<null | ExamChoice["id"]>(null)

  return (
    <div className="flex flex-col items-center gap-16">
        <section className="flex flex-col gap-4 lg:flex-row">
          {EXAM_CHOICES.map((exam) => 
            <ExamCard
              key={exam.id}
              exam={exam}
              isSelected={selected === exam.id}
              onClick={() => setSelected( prev => prev === exam.id? null : exam.id )}
          />)}
        </section>
        <section className="flex flex-wrap justify-center gap-2">
          {
            selected && 
            EXAM_CHOICES.filter( exam => exam.id === selected ).map( exam => (
              exam.isAvailable ?
              exam.choice.choice.map(choice => (
                <ExamCard
                  key={choice.id}
                  exam={choice}
                  // TODO: Need multiple selection trackers
                  isSelected={false}
                  // TODO: Need onclick
                  onClick={() => {}} 
                />
              ))
              : <ComingSoon key={exam.id}/>
            ))
          }
        </section>
    </div>

  )
}

function ComingSoon() {
  return "Coming Soon"
}
