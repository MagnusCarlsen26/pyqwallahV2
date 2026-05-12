"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, type Dispatch, type SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { MdArrowBack } from "react-icons/md";

import ExamCard from "./ExamCard"

import { EXAM_CHOICES } from "../../constants/businessConfig"
import type { ExamChoiceTree, QuestionNode } from "~/app/constants/types"

const MAX_HISTORY_LENGTH = 20

export default function ExamSelector() {

  const [currChoice, setCurrChoice] = useState<QuestionNode>(EXAM_CHOICES)

  const [choiceHistory, setChoiceHistory] = 
    useState<ExamChoiceTree[]>([ EXAM_CHOICES ])

  return (
    <section className="relative w-full">

      {/* HEIGHT PRESERVER */}
      {/* Keeps parent height stable while screens are absolute */}
      <div className="invisible pointer-events-none">
        <ExamSelectorMainContent
          currChoice={currChoice}
          setCurrChoice={setCurrChoice}
          setChoiceHistory={setChoiceHistory}
        />
      </div>

      <AnimatePresence
        mode="sync"
        initial={false}
      >
        <motion.div
          key={currChoice.id}
          {...screenVariants}
          className="absolute inset-0 w-full"
        >
          <ExamSelectorMainContent
            currChoice={currChoice}
            setCurrChoice={setCurrChoice}
            setChoiceHistory={setChoiceHistory}
          />
        </motion.div>
      </AnimatePresence>

      <br></br>

      <button
        type="button"
        className={`${currChoice.id === "TOP" ? "invisible" : ""} cursor-pointer rounded-3xl border px-2 py-2 transition-all duration-300 0.25 backdrop-blur-xl sm:px-4 sm:py-2 border-white/10 bg-white/5 hover:border-glow hover:bg-white/10 hover:shadow-[0_0_30px_rgba(57,255,20,0.12)] active:scale-90 active:bg-white/15 active:shadow-none`}
        onMouseDown={() => {
          const lastChoice = choiceHistory[choiceHistory.length - 2]
          if (lastChoice) {
            setCurrChoice(lastChoice as QuestionNode)
            setChoiceHistory( prev => prev.slice(0,-1))
          } else {
            alert("ERROR")
          }
        }}
      >
        <MdArrowBack />
      </button>
    </section>
  )
}

type ExamSelectorMainContentProps = {
  currChoice: QuestionNode,
  setCurrChoice: Dispatch<SetStateAction<QuestionNode>>,
  setChoiceHistory: Dispatch<SetStateAction<ExamChoiceTree[]>>
}
function ExamSelectorMainContent({
  currChoice,
  setCurrChoice,
  setChoiceHistory
}: ExamSelectorMainContentProps) {

  const router = useRouter()

  return (
    <>
      <p>{currChoice.questionText}</p>
      <br></br>
      <div
        className="flex flex-col w-full items-center justify-center gap-4 lg:flex-row"
      >
        {currChoice.choices.map((choice) => (
          <div
            key={choice.id}
          >
            <ExamCard
              displayName={choice.displayName}
              isSelected={false}
              onMouseDown={() => {
                if (choice.kind != "Question") {
                  return router.push(choice.link)
                }
                setCurrChoice(choice)
                setChoiceHistory( 
                  prev => {
                    // Slice to prevent memory overflow
                    const history = prev.slice(-(MAX_HISTORY_LENGTH - 1))
                    history.push(choice)
                    return history
                  }
                )
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

const screenVariants = {
  variants: {
    initial: {
      opacity: 0,
      x: 140,
      pointerEvents: "none"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.04,
        delayChildren: 0.02,
      },
      transitionEnd: {
        pointerEvents: "auto",
      },
    },
    exit: {
      opacity: 0,
      x: -140,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
      pointerEvents: "none"
    },
},
  initial: "initial",
  animate: "animate",
  exit: "exit"
} as const
