import React from 'react'
import { Link } from 'react-router-dom'
import Question from '../../interfaces/models/Questions'
import { fetchDeleteQuestionAction } from '../../thunkActions/questionsThunk'
import { DeleteButton } from '../DeleteButton/DeleteButton'

const QuestionComponent: React.FC<AppProps> = ({
  question,
  isOwnerQuestion,
}) => {
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <h6>Categoria</h6>
          <h2> {question.category}</h2>
        </div>
        <div className="course-info">
          <h6>{question.type}</h6>
          <h2>{question.question}</h2>
          <Link to={`/question/${question.id}`} className="btn">
            View Question
          </Link>
        </div>

        {isOwnerQuestion && (
          <div className="course-info">
            <div>
              {/* //{' '} */}
              <DeleteButton
                idData={question.id}
                typeDisptach={fetchDeleteQuestionAction}
              />
            </div>
          </div>
        )}
      </div>
    </div>

    // <article className={'question'}>
    //   <h2>{question.question}</h2>
    //   <p>
    //     {question.category} - <small>{question.type}</small>
    //   </p>
    //   {isOwnerQuestion && (
    //     <div>
    //       <DeleteButton
    //         idData={question.id}
    //         typeDisptach={fetchDeleteQuestionAction}
    //       />
    //     </div>
    //   )}
    //   <Link to={`/question/${question.id}`} className="button">
    //     View Question
    //   </Link>
    // </article>
  )
}

type AppProps = {
  question: Question
  isOwnerQuestion: boolean
}

export default QuestionComponent
