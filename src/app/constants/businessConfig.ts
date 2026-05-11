import type { ExamChoiceTree } from "./types"

export const EXAM_CHOICES = {
  id: "TOP",
  displayName: "",
  kind: "Question",
  questionText: "Which Exam do you want to prepare for?",
  choices: [
    {
      id: "GATE",
      displayName: "GATE",
      kind: "Question",
      questionText: "Choose Branch",
      choices: [
        {
          id: "CSE",
          displayName: "CSE",
          kind: "Final",
          link: "/gate/cse"
        },
        {
          id: "DA",
          displayName: "DA",
          kind: "Final",
          link: "/gate/da"
        },
        {
          id: "EC",
          displayName: "EC",
          kind: "Final",
          link: "/gate/ec"
        },
        {
          id: "EE",
          displayName: "EE",
          kind: "Final",
          link: "/gate/ee"
        },
        {
          id: "ME",
          displayName: "ME",
          kind: "Final",
          link: "/gate/me"
        },
        {
          id: "CE",
          displayName: "CE",
          kind: "Final",
          link: "/gate/ce"
        }
      ]
    },

    {
      id: "JEE",
      displayName: "JEE",
      kind: "Question",
      questionText: "Choose Question Type",
      choices: [
        {
          id: "PHY",
          displayName: "Physics",
          kind: "Final",
          link: "/jee/physics"
        },
        {
          id: "CHEM",
          displayName: "Chemistry",
          kind: "Final",
          link: "/jee/chemistry"
        },
        {
          id: "MATH",
          displayName: "Math",
          kind: "Final",
          link: "/jee/math"
        }
      ]
    },

    {
      id: "CAT",
      displayName: "CAT",
      kind: "Disabled",
      link: "CAT"
    }
  ]
} as const satisfies ExamChoiceTree
