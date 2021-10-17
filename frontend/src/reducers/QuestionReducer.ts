import { createSlice, Reducer } from '@reduxjs/toolkit'
import QuestionState from '../interfaces/states/QuestionState'
import { fetchQuestionAction } from '../thunkActions/questionsThunk'

export const initialState: QuestionState = {
  loading: true,
  hasErrors: false,
  questions: [],
  question: {},
  redirect: null,
}

const questionReducer = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionAction.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchQuestionAction.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
      })
  },
})

export default questionReducer.reducer as Reducer<typeof initialState>
