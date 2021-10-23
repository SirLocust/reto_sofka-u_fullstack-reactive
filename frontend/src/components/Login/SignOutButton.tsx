import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { useAppDispatch } from '../../store/store.hook'
import { signOut } from '../../thunkActions/authThunk'

type AppProps = {
  user: string | null
}

export const SignOutButton: React.FC<AppProps> = ({ user }) => {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    console.log('hanel')
    dispatch(signOut())
  }
  return (
    <>
      {user && (
        <button className="button right" onClick={handleSignOut}>
          Sign out
        </button>
      )}
    </>
  )
}
