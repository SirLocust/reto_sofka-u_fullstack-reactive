import { fetchQuestions } from './../requestApi/QuestionRequest'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Question from '../interfaces/models/Questions'

export const fetchQuestionAction = createAsyncThunk(
  'question/getAll',
  async () => {
    const response = await fetchQuestions()
    return response.json() as Question[]
  }
)
