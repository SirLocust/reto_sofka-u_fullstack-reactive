import {
  fetchDeleteQuestionAction,
  fetchOwnerQuestionsAction,
  fetchPostAnswerAction,
  fetchPostQuestionAction,
} from './../thunkActions/questionsThunk'
import { createSlice, Reducer } from '@reduxjs/toolkit'
import QuestionState from '../interfaces/states/QuestionState'
import {
  fetchQuestionAction,
  fetchQuestionsAction,
} from '../thunkActions/questionsThunk'

export const initialState: QuestionState = {
  loading: true,
  hasErrors: false,
  questions: [],
  question: null,
  redirect: null,
}

const questionReducer = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsAction.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchQuestionsAction.fulfilled, (state, action) => {
        state.questions = action.payload
        state.loading = false
      })
      .addCase(fetchQuestionAction.fulfilled, (state, action) => {
        state.question = action.payload
      })
      .addCase(fetchOwnerQuestionsAction.fulfilled, (state, action) => {
        state.questions = action.payload
      })

      .addCase(fetchPostAnswerAction.fulfilled, () => {})
      .addCase(fetchPostQuestionAction.fulfilled, () => {})
      .addCase(fetchDeleteQuestionAction.fulfilled, (state, action) => {
        state.questions = state.questions.filter(
          (question) => question.id !== action.payload
        )
      })
  },
})

export const reducer: Reducer<typeof initialState> = questionReducer.reducer
export default questionReducer.reducer as Reducer<typeof initialState>
