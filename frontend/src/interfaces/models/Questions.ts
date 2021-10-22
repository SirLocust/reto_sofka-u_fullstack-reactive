import Answer from './Answer'
import Calification from './Calification'

export default interface Question {
  id: string
  userId: string
  question: string
  answers: Answer[]
  category: string
  type: string
  calification: Calification
}
