import { createSlice, Reducer } from '@reduxjs/toolkit'
import { AuthState } from '../interfaces/states/AuthState'
import { loginWhitGoogle, signOut } from '../thunkActions/authThunk'

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
        console.log(action)
        state.email = action.payload.email
        state.uid = action.payload.uid
      })
      .addCase(loginWhitGoogle.rejected, (state, action) => {
        console.log(action)
      })
      .addCase(signOut.fulfilled, (state, action) => {
        console.log(action, 'sss')
        state.email = initialState.email
        state.uid = initialState.uid
      })
  },
})

export const actionsAuth = authReducer.actions

export default authReducer.reducer as Reducer<typeof initialState>
