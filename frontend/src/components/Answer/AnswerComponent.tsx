import React from 'react'

import Answer from '../../interfaces/models/Answer'

const AnswerComponent: React.FC<AppProps> = ({ answer }) => {
  return (
    <aside className="answer">
      <p>{answer.answer}</p>
    </aside>
  )
}

type AppProps = {
  answer: Answer
}
export default AnswerComponent
