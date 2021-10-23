import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { LoaderLoading } from '../components/Loading/LoaderLoading'
import QuestionComponent from '../components/Question/Question'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import { fetchQuestionsAction } from '../thunkActions/questionsThunk'

export const QuestionPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = (props) => {
  useEffect(() => {
    props.dispatch(fetchQuestionsAction())
  }, [])
  return (
    <section>
      {props.loading ? (
        <div>
          <LoaderLoading />
        </div>
      ) : (
        <div className="container flex_center">
          {props.questions.map((question) => (
            <QuestionComponent
              isOnly={false}
              key={question.id}
              question={question}
              isOwnerQuestion={false}
            />
          ))}
        </div>
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
