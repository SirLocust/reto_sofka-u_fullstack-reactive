import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/AuthReducer'
import questionReducer from '../reducers/QuestionReducer'
import thunk, { ThunkAction } from 'redux-thunk'

declare module 'redux' {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R
  }
}

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
