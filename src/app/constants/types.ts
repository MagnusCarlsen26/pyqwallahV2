
type BaseNode = {
  id: string,
  displayName: string
}

export type QuestionNode = BaseNode & {
  kind: "Question",
  questionText: string,
  choices: ExamChoiceTree[]
}

type FinalNode = BaseNode & {
  kind: "Final" | "Disabled",
  link: string
}

export type ExamChoiceTree = QuestionNode | FinalNode