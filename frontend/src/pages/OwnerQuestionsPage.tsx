import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import QuestionComponent from '../components/Question/Question'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import { fetchOwnerQuestionsAction } from '../thunkActions/questionsThunk'

export const OwnerQuestionPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = ({ questions, userId, dispatch }) => {
  useEffect(() => {
    if (userId) {
      dispatch(fetchOwnerQuestionsAction(userId))
    }
  }, [])
  console.log(questions)
  return (
    // <section>
    //   <h1>Questions</h1>
    //   {props.loading ? (
    //     <p>Loading questions...</p>
    //   ) : props.hasError ? (
    //     <p>Unable to display questions.</p>
    //   ) : (
    <div className="container flex_center">
      {questions.map((question) => {
        if (question.userId !== userId) {
          return <></>
        }
        return (
          <QuestionComponent
            isOnly={false}
            key={question.id}
            question={question}
            isOwnerQuestion={true}
          />
        )
      })}
    </div>

    //   )}
    // </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.questionReducer.loading,
  questions: state.questionReducer.questions,
  userId: state.authReducer.uid,
  hasError: state.questionReducer.hasErrors,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(OwnerQuestionPage)
