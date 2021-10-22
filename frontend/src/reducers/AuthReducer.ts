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
      })
      .addCase(loginWhitGoogle.rejected, (state, action) => {})
      .addCase(signOut.fulfilled, (state, action) => {
        state.email = initialState.email
        state.uid = initialState.uid
      })
      .addCase(loginWhitEmailAction.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.uid = action.payload.uid
      })
      .addCase(createUserEmailAction.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.uid = action.payload.uid
      })
      .addCase(loginWhitEmailAction.rejected, (state, action) => {})
  },
})

// export const actionsAuth = authReducer.actions

export default authReducer.reducer as Reducer<typeof initialState>
