"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useMemo, useState } from "react"

import ExamCard from "./ExamCard"

import {
  EXAM_CHOICES,
  type ExamChoice,
} from "../../constants/businessConfig"

export default function ExamSelector() {
  const [selected, setSelected] =
    useState<ExamChoice["id"] | null>(null)

  const selectedExam = useMemo(
    () =>
      EXAM_CHOICES.find(
        (exam) => exam.id === selected
      ),
    [selected]
  )

  return (
    <section className="relative w-full">

      {/* TODO: Optimize this */}
      {/* HEIGHT PRESERVER */}
      {/* Keeps parent height stable while screens are absolute */}
      <div className="invisible pointer-events-none">

        {!selectedExam ? (
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
            {EXAM_CHOICES.map((exam) => (
              <ExamCard
                key={exam.id}
                exam={exam}
                isSelected={false}
                // eslint-disable-next-line @typescript-eslint/no-empty-function -- intentional no-op
                onMouseDown={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-wrap items-center justify-center gap-2">

            {selectedExam.isAvailable ? (
              selectedExam.choice.choice.map(
                (choice) => (
                  <ExamCard
                    key={choice.id}
                    exam={choice}
                    isSelected={false}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function -- intentional no-op
                    onMouseDown={() => {}}
                  />
                )
              )
            ) : (
              <ComingSoon />
            )}

            <button className="mt-4 px-4 py-2">
              Back
            </button>

          </div>
        )}

      </div>

      <AnimatePresence
        mode="sync"
        initial={false}
      >

        {/* PARENT VIEW */}
        {!selectedExam && (
          <motion.div
            key="parent"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex w-full flex-col items-center justify-center gap-4 lg:flex-row"
          >

            {EXAM_CHOICES.map((exam, index) => (
              <motion.div
                key={exam.id}
                custom={index}
                variants={cardVariants}
              >
                <ExamCard
                  exam={exam}
                  isSelected={false}
                  onMouseDown={() => {
                    setSelected(exam.id)
                  }}
                />
              </motion.div>
            ))}

          </motion.div>
        )}

        {/* CHILD VIEW */}
        {selectedExam && (
          <motion.div
            key={`child-${selectedExam.id}`}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex w-full flex-wrap items-center justify-center gap-2"
          >

            {selectedExam.isAvailable ? (
              selectedExam.choice.choice.map(
                (choice, index) => (
                  <motion.div
                    key={choice.id}
                    custom={index}
                    variants={cardVariants}
                  >
                    <ExamCard
                      exam={choice}
                      isSelected={false}
                      onMouseDown={() => {
                        console.log(choice.id)
                      }}
                    />
                  </motion.div>
                )
              )
            ) : (
              <motion.div
                custom={0}
                variants={cardVariants}
              >
                <ComingSoon />
              </motion.div>
            )}

            {/* BACK BUTTON */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onMouseDown={() => {
                setSelected(null)
              }}
              className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur"
            >
              Back
            </motion.button>

          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}

function ComingSoon() {
  return (
    <div className="py-8 text-xl font-semibold">
      Coming Soon
    </div>
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
