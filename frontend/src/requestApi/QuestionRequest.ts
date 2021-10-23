import { SendLikeFace } from './../interfaces/models/SendLikeFace'
import Answer from '../interfaces/models/Answer'
import Question from '../interfaces/models/Questions'
import { SendPositionAnswer } from '../interfaces/models/SendPositionAnswer'

const URL_BASE = ' https://agile-scrubland-98054.herokuapp.com'
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

export const fetchDeleteAnswer = (id: string): Promise<Response> => {
  return fetch(`${URL_BASE}/delete/answer/${id}`, {
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
export const fetchPostAnswer = (answer: Partial<Answer>): Promise<Response> => {
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

export const fetchPostLikeFace = (
  sendLikeFace: SendLikeFace
): Promise<Response> => {
  return fetch(`${URL_BASE}/add/like`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendLikeFace),
  })
}

export const fetchPostPositionAnswer = (
  sendPositionAnswer: SendPositionAnswer
): Promise<Response> => {
  return fetch(`${URL_BASE}/add/position`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendPositionAnswer),
  })
}
