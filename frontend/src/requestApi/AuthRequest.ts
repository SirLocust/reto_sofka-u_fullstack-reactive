import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase.config'

const provider = new GoogleAuthProvider()

export const loginGoogle = (): Promise<UserCredential> => {
  return signInWithPopup(auth, provider)
}

export const signOutFirebase = (): Promise<void> => {
  return signOut(auth)
}
