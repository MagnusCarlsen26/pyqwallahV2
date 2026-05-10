export const EXAM_CHOICES = [
  {
    id: "GATE",
    displayName:"GATE",
    isAvailable: true,
    choice: {
      choiceDisplayName: "Choose Branch",
      choice : [
        {
          id: "CSE",
          displayName: "CSE",
        },
        {
          id: "DA",
          displayName: "DA",
        },
        {
          id: "EC",
          displayName: "EC",
        },
        {
          id: "EE",
          displayName: "EE",
        },
        {
          id: "ME",
          displayName: "ME",
        },
        {
          id: "CE",
          displayName: "CE",
        },
      ]
    }
  },
  {
    id: "JEE",
    displayName:"JEE",
    isAvailable: true,
    choice: {
      // TODO: Need better display name
      choiceDisplayName: "Choose Question Type",
      choice: [
        {
          id: "PHY",
          displayName: "Physics"
        },
        {
          id: "CHEM",
          displayName: "Chemistry"
        },
        {
          id: "MATH",
          displayName: "Math"
        }
      ]
    }
  },
  {
    id: "CAT",
    displayName:"CAT",
    isAvailable: false
  }
] as const

export type ExamChoice = typeof EXAM_CHOICES[number]