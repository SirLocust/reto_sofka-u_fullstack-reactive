import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginGoogle, signOutFirebase } from '../requestApi/AuthRequest'

export const loginWhitGoogle = createAsyncThunk(
  'auth/loginWhitGoogleStatus',
  async () => {
    const response = await loginGoogle()
    return response.user
  }
)
export const signOut = createAsyncThunk('auth/signOutStatus', async () => {
  return await signOutFirebase()
})
