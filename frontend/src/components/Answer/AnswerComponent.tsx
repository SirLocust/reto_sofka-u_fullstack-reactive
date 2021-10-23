import React from 'react'

import Answer from '../../interfaces/models/Answer'
import { fetchDeleteAnswerAction } from '../../thunkActions/questionsThunk'
import { DeleteButton } from '../DeleteButton/DeleteButton'
import PositionsButtons from '../PositionButtons/PositionsButtons'

const AnswerComponent: React.FC<AppProps> = ({ answer, userId }) => {
  return (
    <aside className="answer">
      <div className="answer_paraghraf">
        <p>{answer.answer}</p>
      </div>
      <div className="flex_center_row flex_center_row_beetwen">
        <div className="answer_position">
          {' '}
          <i className="fas fa-poll"></i>
          {answer.position}
        </div>
        {userId && (
          <>
            <div>
              <PositionsButtons answerId={answer.id} />
            </div>
          </>
        )}
        <div>
          {userId && (
            <DeleteButton
              idData={answer.id}
              typeDisptach={fetchDeleteAnswerAction}
            ></DeleteButton>
          )}
        </div>
      </div>
      <div></div>
    </aside>
  )
}

type AppProps = {
  answer: Answer
  userId: string | null
}
export default AnswerComponent
