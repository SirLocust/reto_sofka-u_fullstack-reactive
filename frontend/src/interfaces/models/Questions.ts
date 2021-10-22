import Answer from './Answer'

export default interface Question {
  id: string
  userId: string
  question: string
  answers: Answer[]
  category: string
  type: string
  califaction: any
}
