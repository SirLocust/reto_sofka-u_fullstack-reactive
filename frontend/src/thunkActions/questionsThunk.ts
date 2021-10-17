import { fetchQuestions } from './../requestApi/QuestionRequest'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuestionAction = createAsyncThunk(
  'question/getAll',
  async () => {
    const response = await fetchQuestions()
    return response.json()
  }
)
