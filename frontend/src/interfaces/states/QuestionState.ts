import Question from '../models/Questions'

export default interface QuestionState {
  loading: boolean
  hasErrors: boolean
  questions: Question[]
  question: Question | null
  redirect: string | null
}
