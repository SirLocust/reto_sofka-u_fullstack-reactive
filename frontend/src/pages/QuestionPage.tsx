import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Page from '../interfaces/models/Page'
import { AppDispatch, RootState } from '../store/store'
import { fetchQuestionAction } from '../thunkActions/questionsThunk'

export const QuestionPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = (props) => {
  useEffect(() => {
    props.dispatch<any>(fetchQuestionAction())
  }, [props.dispatch])
  return (
    <section>
      <h1>Questions</h1>
      {props.loading ? (
        <p>Loading questions...</p>
      ) : props.hasError ? (
        <p>Unable to display questions.</p>
      ) : (
        <h1>{JSON.stringify(props.questions)}</h1>
      )}
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.questionReducer.loading,
  questions: state.questionReducer.questions,
  hasError: state.questionReducer.hasErrors,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(QuestionPage)
