import { EmailAndPass } from './../interfaces/models/EmailAndPass'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CreateUserWithEmail,
  loginGoogle,
  loginWithEmail,
  signOutFirebase,
} from '../requestApi/AuthRequest'

export const loginWhitGoogle = createAsyncThunk(
  'auth/loginWhitGoogleStatus',
  async () => {
    const response = await loginGoogle()
    return response.user
  }
)
export const loginWhitEmailAction = createAsyncThunk(
  'auth/loginWhitEmail',
  async (emailAndPass: EmailAndPass) => {
    const response = await loginWithEmail(emailAndPass)
    return response.user
  }
)
export const createUserEmailAction = createAsyncThunk(
  'auth/createUserWithEmail',
  async (emailAndPass: EmailAndPass) => {
    const response = await CreateUserWithEmail(emailAndPass)
    return response.user
  }
)

export const signOut = createAsyncThunk('auth/signOutStatus', async () => {
  return await signOutFirebase()
})
