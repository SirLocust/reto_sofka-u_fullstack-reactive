import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import { LoginButtos } from '../Login/LoginButtos'

export const CalificationButton: React.FC<PropsFromRedux> = ({
  calification,
}) => {
  console.log(calification)
  return (
    <div className="flex_center_row">
      <div className="flex_center_row">
        <div>
          <span role="img" aria-label="HAPPY">
            {' '}
            😊
          </span>
          <p>{calification?.HAPPY}</p>
        </div>
      </div>
      <div className="flex_center_row">
        <div>
          <span role="img" aria-label="HAPPY">
            {' '}
            😊
          </span>
          <p>{calification?.SATISFIED}</p>
        </div>
      </div>
      <div className="flex_center_row">
        <div>
          <span role="img" aria-label="HAPPY">
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
  user: state.authReducer,
  calification: state.questionReducer.question?.calification,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CalificationButton)
