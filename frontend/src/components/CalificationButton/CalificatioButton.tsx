import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { TypeCalification } from '../../enums/TypeCalification'
import { SendLikeFace } from '../../interfaces/models/SendLikeFace'

import { RootState } from '../../store/store'
import { fetchPostLikeFaceAction } from '../../thunkActions/questionsThunk'

const CalificationButton: React.FC<PropsFromRedux> = ({
  calification,
  dispatch,
  userId,
  questionId,
}) => {
  const handlerPostLike = (type: TypeCalification) => {
    const newSendLikeFace: SendLikeFace = {
      userId: userId || '',
      questionId: questionId || '',
      state: type,
    }
    if (userId) {
      dispatch(fetchPostLikeFaceAction(newSendLikeFace))
    }
  }
  return (
    <div className="flex_center_row">
      <div className="flex_center_row">
        <div>
          <span
            role="img"
            aria-label="HAPPY"
            onClick={() => {
              handlerPostLike(TypeCalification.HAPPY)
            }}
            aria-hidden="true"
          >
            {' '}
            😊
          </span>
          <p>{calification?.HAPPY}</p>
        </div>
      </div>
      <div className="flex_center_row">
        <div>
          <span
            role="img"
            aria-label="SATISFIED"
            onClick={() => {
              handlerPostLike(TypeCalification.SATISFIED)
            }}
            aria-hidden="true"
          >
            {' '}
            😊
          </span>
          <p>{calification?.SATISFIED}</p>
        </div>
      </div>
      <div className="flex_center_row">
        <div>
          <span
            role="img"
            aria-label="UNHAPPY"
            onClick={() => {
              handlerPostLike(TypeCalification.UNHAPPY)
            }}
            aria-hidden="true"
          >
            {' '}
            😊
          </span>
          <p>{calification?.UNHAPPY}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  userId: state.authReducer.uid,
  questionId: state.questionReducer.question?.id,
  calification: state.questionReducer.question?.calification,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CalificationButton)
