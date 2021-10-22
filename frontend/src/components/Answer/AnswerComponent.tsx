import React from 'react'

import Answer from '../../interfaces/models/Answer'
import { fetchDeleteAnswerAction } from '../../thunkActions/questionsThunk'
import { DeleteButton } from '../DeleteButton/DeleteButton'

const AnswerComponent: React.FC<AppProps> = ({ answer, userId }) => {
  return (
    <aside className="answer">
      <p>{answer.answer}</p>
      <div>{answer.position}</div>
      <DeleteButton
        idData={answer.id}
        typeDisptach={fetchDeleteAnswerAction}
      ></DeleteButton>
    </aside>
  )
}

type AppProps = {
  answer: Answer
  userId: string | null
}
export default AnswerComponent
