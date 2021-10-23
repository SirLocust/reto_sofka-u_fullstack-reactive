import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import {
  fetchPostQuestionAction,
  fetchQuestionAction,
} from '../thunkActions/questionsThunk'
import { useForm } from 'react-hook-form'

import Question from '../interfaces/models/Questions'
import { unwrapResult } from '@reduxjs/toolkit'
import { LoaderLoading } from '../components/Loading/LoaderLoading'

export const QuestionFormPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = ({ dispatch, match, userId, history, loading }) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestionAction(id))
  }, [])
  const { register, handleSubmit } = useForm<Partial<Question>>()

  const onSubmit = (data: Partial<Question>) => {
    data.userId = userId || ''
    dispatch(fetchPostQuestionAction(data))
      .then(unwrapResult)
      .then((answerrId) => {
        console.log(answerrId)
        history.push(`/question/${answerrId.id}`)
      })
  }
  return (
    <section className="container flex_center">
      <h1>New Question</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="type">Type</label>
          <select {...register('type')} id="">
            <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
            <option value="OPINION (SHORT OPEN BOX)">
              OPINION (SHORT OPEN BOX)
            </option>
            <option value="WITH RESULT (OPEN BOX WITH LINK)">
              WITH RESULT (OPEN BOX WITH LINK)
            </option>
            <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">
              WITH EVIDENCE (OPEN BOX WITH VIDEO)
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select {...register('category')} id="category">
            <option value="TECHNOLOGY AND COMPUTER">
              TECHNOLOGY AND COMPUTER
            </option>
            <option value="SCIENCES">SCIENCES</option>
            <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
            <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
            <option value="LANGUAGE">LANGUAGE</option>
          </select>
        </div>

        <div>
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            {...register('question', { required: true, maxLength: 300 })}
          />
        </div>
        <button type="submit" className="button">
          {loading ? 'Saving ....' : 'Save'}
        </button>
        {loading && <LoaderLoading />}
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

export default connector(QuestionFormPage)
