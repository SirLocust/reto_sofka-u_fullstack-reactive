import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/AuthReducer'
import questionReducer from '../reducers/QuestionReducer'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    authReducer,
    questionReducer,
  },
  middleware: (curryGetDefaultMiddleware) => {
    return curryGetDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
