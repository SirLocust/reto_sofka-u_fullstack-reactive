import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import QuestionComponent from '../components/Question/Question'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import {
  fetchPostAnswerAction,
  fetchQuestionAction,
} from '../thunkActions/questionsThunk'
import { useForm } from 'react-hook-form'

import Answer from '../interfaces/models/Answer'

export const AnswerFormPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = ({ question, dispatch, match, loading, userId, history }) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestionAction(id))
  }, [])
  const { register, handleSubmit } = useForm<Partial<Answer>>()

  const onSubmit = (data: Partial<Answer>) => {
    data.userId = userId || undefined
    data.questionId = question?.id

    dispatch(fetchPostAnswerAction(data)).then(() => {
      history.push(`/question/${question?.id}`)
    })
  }
  return (
    // <section>
    //   <h1>Questions</h1>
    //   {props.loading ? (
    //     <p>Loading questions...</p>
    //   ) : props.hasError ? (
    //     <p>Unable to display questions.</p>
    //   ) : (
    <section>
      {question && (
        <QuestionComponent question={question} isOwnerQuestion={false} />
      )}
      <h1>New Answer</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="answer">Answer</label>
          <textarea
            id="answer"
            {...register('answer', { required: true, maxLength: 300 })}
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Saving ....' : 'Save'}
        </button>
      </form>
    </section>

    //   )}
    // </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.questionReducer.loading,
  question: state.questionReducer.question,
  hasError: state.questionReducer.hasErrors,
  userId: state.authReducer.uid,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AnswerFormPage)
