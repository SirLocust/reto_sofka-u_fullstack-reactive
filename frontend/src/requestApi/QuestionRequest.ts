import Answer from '../interfaces/models/Answer'
import Question from '../interfaces/models/Questions'

const URL_BASE = 'http://localhost:8081'
export const fetchQuestions = (): Promise<Response> => {
  return fetch(`${URL_BASE}/getAll`)
}

export const fetchQuestion = (id: string): Promise<Response> => {
  return fetch(`${URL_BASE}/get/${id}`)
}

export const fetchDeleteQuestion = (id: string): Promise<Response> => {
  return fetch(`${URL_BASE}/delete/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const fetchOwnerQuestions = (id: string): Promise<Response> => {
  return fetch(`${URL_BASE}/getOwnerAll/${id}`)
}
export const fetchPostAnswer = (answer: Answer): Promise<Response> => {
  return fetch(`${URL_BASE}/add`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answer),
  })
}
export const fetchPostQuestion = (
  question: Partial<Question>
): Promise<Response> => {
  return fetch(`${URL_BASE}/create`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  })
}
