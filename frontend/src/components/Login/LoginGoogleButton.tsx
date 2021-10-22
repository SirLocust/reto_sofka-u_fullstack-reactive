/* eslint-disable jsx-a11y/anchor-is-valid */
import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { RouteComponentProps } from 'react-router'

import { useAppDispatch } from '../../store/store.hook'
import { loginWhitGoogle } from '../../thunkActions/authThunk'

type AppProp = {
  history: RouteComponentProps['history']
}
export const LoginGoogleButton: React.FC<AppProp> = ({ history }) => {
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    dispatch(loginWhitGoogle())
      .then(unwrapResult)
      .then(() => {
        history.push(`/`)
      })
  }

  return (
    <>
      {/* <button className="button right" onClick={handleLogin}>
        login
      </button> */}
      <a className="btn-google m-b-10" onClick={handleLogin} aria-hidden="true">
        <img
          src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
          alt="GOOGLE"
        />
        Google
      </a>
    </>
  )
}
