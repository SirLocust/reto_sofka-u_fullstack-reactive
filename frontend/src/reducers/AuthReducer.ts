import { createSlice, Reducer } from '@reduxjs/toolkit'
import { AuthState } from '../interfaces/states/AuthState'
import {
  createUserEmailAction,
  loginWhitEmailAction,
  loginWhitGoogle,
  signOut,
} from '../thunkActions/authThunk'

const initialState: AuthState = {
  email: null,

  uid: null,
  loading: false,
  error: undefined,
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWhitGoogle.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.uid = action.payload.uid
        state.loading = false
      })
      .addCase(loginWhitGoogle.pending, (state, action) => {
        state.loading = true
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.email = initialState.email
        state.uid = initialState.uid
      })
      .addCase(loginWhitEmailAction.pending, (state, action) => {
        state.loading = true
      })
      .addCase(loginWhitEmailAction.fulfilled, (state, action) => {
        state.loading = false
        state.error = undefined
        state.email = action.payload.email
        state.uid = action.payload.uid
      })
      .addCase(loginWhitEmailAction.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
      .addCase(createUserEmailAction.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.uid = action.payload.uid
        state.loading = false
      })
      .addCase(createUserEmailAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(createUserEmailAction.pending, (state, action) => {
        state.loading = true
      })
  },
})

// export const actionsAuth = authReducer.actions

export default authReducer.reducer as Reducer<typeof initialState>
