import {
  fetchDeleteQuestion,
  fetchOwnerQuestions,
  fetchPostAnswer,
  fetchPostQuestion,
  fetchQuestion,
  fetchQuestions,
} from './../requestApi/QuestionRequest'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Question from '../interfaces/models/Questions'
import Answer from '../interfaces/models/Answer'

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
  async (answer: Answer) => {
    const response = await fetchPostAnswer(answer)
    return response.json() as unknown as Answer
  }
)
export const fetchPostQuestionAction = createAsyncThunk(
  'question/create',
  async (question: Partial<Question>) => {
    const response = await fetchPostQuestion(question)

    return response.text() as unknown as string
  }
)
export const fetchDeleteQuestionAction = createAsyncThunk(
  'question/delete',
  async (id: string) => {
    const response = await fetchDeleteQuestion(id)

    return id
  }
)
