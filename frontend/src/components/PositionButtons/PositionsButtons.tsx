import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { TypeCalification } from '../../enums/TypeCalification'
import { SendLikeFace } from '../../interfaces/models/SendLikeFace'
import { SendPositionAnswer } from '../../interfaces/models/SendPositionAnswer'

import { RootState } from '../../store/store'
import {
  fetchPostLikeFaceAction,
  fetchPostPositionAnswerAction,
} from '../../thunkActions/questionsThunk'

const PositionButtons: React.FC<PropsFromRedux & AppProps> = ({
  dispatch,
  userId,
  questionId,
  answerId,
}) => {
  const handlerPostLike = (value: number) => {
    const newSendLikeFace: SendPositionAnswer = {
      userId: userId || '',
      questionId: questionId || '',
      answerId: answerId,
      value: value,
    }
    dispatch(fetchPostPositionAnswerAction(newSendLikeFace))
  }
  return (
    <div className="flex_center_row">
      <button
        onClick={() => {
          handlerPostLike(1)
        }}
      >
        UP
      </button>
      <button
        onClick={() => {
          handlerPostLike(-1)
        }}
      >
        Down
      </button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  userId: state.authReducer.uid,
  questionId: state.questionReducer.question?.id,
})

const connector = connect(mapStateToProps)

type AppProps = {
  answerId: string
}

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PositionButtons)
