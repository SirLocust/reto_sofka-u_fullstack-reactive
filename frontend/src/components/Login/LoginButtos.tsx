import React from 'react'

import { useAppDispatch } from '../../store/store.hook'
import { loginWhitGoogle, signOut } from '../../thunkActions/authThunk'

type AppProps = {
  user: string | null
}
export const LoginButtos: React.FC<AppProps> = (props) => {
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    dispatch(loginWhitGoogle())
  }
  const handleSignOut = () => {
    console.log('hanel')
    dispatch(signOut())
  }
  return (
    <>
      {props.user ? (
        <button className="button right" onClick={handleSignOut}>
          Sign out
        </button>
      ) : (
        <button className="button right" onClick={handleLogin}>
          login
        </button>
      )}
    </>
  )
}
