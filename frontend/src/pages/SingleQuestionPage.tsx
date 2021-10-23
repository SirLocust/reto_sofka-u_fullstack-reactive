import { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import AnswerComponent from '../components/Answer/AnswerComponent'
import CalificatioButton from '../components/CalificationButton/CalificatioButton'

import QuestionComponent from '../components/Question/Question'
import Page from '../interfaces/models/Page'
import { RootState } from '../store/store'
import { fetchQuestionAction } from '../thunkActions/questionsThunk'

export const SingleQuestionPage: React.FC<
  Page & RouteComponentProps<any> & PropsFromRedux
> = ({ question, match, dispatch, userId }) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestionAction(id))
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  return (
    // <section>
    //   <h1>Questions</h1>
    //   {props.loading ? (
    //     <p>Loading questions...</p>
    //   ) : props.hasError ? (
    //     <p>Unable to display questions.</p>
    //   ) : (
    <div className="container ">
      <div className="flex_center">
        {question && (
          <QuestionComponent
            isOnly={true}
            question={question}
            isOwnerQuestion={false}
          />
        )}
      </div>
      <div>
        {userId && (
          <Link to={'/answer/' + id} className="button ">
            Reply
          </Link>
        )}
      </div>
      <div className="flex_center">{question && <CalificatioButton />}</div>
      <div>
        {question && question.answers && question.answers.length ? (
          question.answers.map((answer) => (
            <AnswerComponent key={answer.id} answer={answer} userId={userId} />
          ))
        ) : (
          <p>Empty answer!</p>
        )}
      </div>
    </div>
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

export default connector(SingleQuestionPage)
