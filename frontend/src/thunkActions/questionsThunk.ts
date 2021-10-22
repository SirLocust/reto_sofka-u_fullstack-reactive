import {
  fetchDeleteAnswer,
  fetchDeleteQuestion,
  fetchOwnerQuestions,
  fetchPostAnswer,
  fetchPostLikeFace,
  fetchPostQuestion,
  fetchQuestion,
  fetchQuestions,
} from './../requestApi/QuestionRequest'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Question from '../interfaces/models/Questions'
import Answer from '../interfaces/models/Answer'
import { SendLikeFace } from '../interfaces/models/SendLikeFace'

export const fetchQuestionsAction = createAsyncThunk(
  'question/getAll',
  async () => {
    const response = await fetchQuestions()
    return response.json() as unknown as Question[]
  }
)

export const fetchQuestionAction = createAsyncThunk(
  'question/get/:id',
  async (id: string) => {
    const response = await fetchQuestion(id)
    return response.json() as unknown as Question
  }
)

export const fetchOwnerQuestionsAction = createAsyncThunk(
  'question/getOwnerAll/:id',
  async (id: string) => {
    const response = await fetchOwnerQuestions(id)
    return response.json() as unknown as Question[]
  }
)
export const fetchPostAnswerAction = createAsyncThunk(
  'question/add',
  async (answer: Partial<Answer>) => {
    const response = await fetchPostAnswer(answer)
    return response.json() as unknown as Question
  }
)
export const fetchPostLikeFaceAction = createAsyncThunk(
  'question/add',
  async (sendLikeFace: SendLikeFace) => {
    const response = await fetchPostLikeFace(sendLikeFace)
    return response.json() as unknown as Question
  }
)
export const fetchPostPositionAnswerAction = createAsyncThunk(
  'question/add',
  async (sendPositionAnswer: SendPositionAnswer) => {
    const response = await fetchPostLikeFace(sendPositionAnswer)
    return response.json() as unknown as Question
  }
)

export const fetchPostQuestionAction = createAsyncThunk(
  'question/create',
  async (question: Partial<Question>) => {
    const response = await fetchPostQuestion(question)

    return response.json() as unknown as Question
  }
)
export const fetchDeleteQuestionAction = createAsyncThunk(
  'question/delete',
  async (id: string) => {
    const response = await fetchDeleteQuestion(id)

    return id
  }
)

export const fetchDeleteAnswerAction = createAsyncThunk(
  'question/delete/answer',
  async (id: string) => {
    const response = await fetchDeleteAnswer(id)

    return id
  }
)
