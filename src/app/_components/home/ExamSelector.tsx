"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import ExamCard from "./ExamCard"

import { EXAM_CHOICES } from "../../constants/businessConfig"

import type { ExamChoiceTree, QuestionNode } from "~/app/constants/types"
import { useRouter } from "next/navigation"
export default function ExamSelector() {

  const [selectedPath, setSelectedPath] = useState<ExamChoiceTree["id"][]>([])
  const [currChoice, setCurrChoice] = useState<QuestionNode>(EXAM_CHOICES)

  const router = useRouter()

  return (
    <section className="relative w-full">

      {/* TODO: Optimize this */}
      {/* HEIGHT PRESERVER */}
      {/* Keeps parent height stable while screens are absolute */}
      <div className="invisible pointer-events-none">
        {/* TODO: kind = final? need onMouseDown function to redirect */}
        {/* <p>{currChoice.questionText}</p> */}
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
          {currChoice.choices.map((choice) => (
            <ExamCard
              key={choice.id}
              displayName={choice.displayName}
              isSelected={false}
              // eslint-disable-next-line @typescript-eslint/no-empty-function -- intentional no-op
              onMouseDown={() => { }}
            />
          ))}
        </div>

      </div>

      <AnimatePresence
        mode="sync"
        initial={false}
      >
        <motion.p
          key={currChoice.id}
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >{currChoice.questionText}</motion.p>
        <motion.div
          key={currChoice.id}
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 flex w-full flex-col items-center justify-center gap-4 lg:flex-row"
        >
          {currChoice.choices.map((choice, index) => (
            <motion.div
              key={choice.id}
              custom={index}
              variants={cardVariants}
            >
              <ExamCard
                displayName={choice.displayName}
                isSelected={false}
                onMouseDown={() => {
                  if (choice.kind != "Question") return router.push(choice.link)
                  setCurrChoice(choice)
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

const screenVariants = {
  initial: {
    opacity: 0,
    x: 140,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },

  exit: {
    opacity: 0,
    x: -140,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const

const cardVariants = {
  initial: {
    opacity: 0,
    x: 24,
    scale: 0.96,
  },

  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -24,
    scale: 0.96,
    transition: {
      duration: 1,
    },
  },
} as const
