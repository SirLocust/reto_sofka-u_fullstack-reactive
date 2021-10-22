import React from 'react'

import { useAppDispatch } from '../../store/store.hook'
import { signOut } from '../../thunkActions/authThunk'

type AppProps = {
  user: string | null
}
export const SignOutButton: React.FC<AppProps> = (props) => {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    console.log('hanel')
    dispatch(signOut())
  }
  return (
    <>
      {props.user && (
        <button className="button right" onClick={handleSignOut}>
          Sign out
        </button>
      )}
    </>
  )
}
