import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../config/firebase.config'
import { EmailAndPass } from '../interfaces/models/EmailAndPass'

const provider = new GoogleAuthProvider()

export const loginGoogle = (): Promise<UserCredential> => {
  return signInWithPopup(auth, provider)
}

export const signOutFirebase = (): Promise<void> => {
  return signOut(auth)
}

export const loginWithEmail = (
  emailAndPass: EmailAndPass
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(
    auth,
    emailAndPass.email,
    emailAndPass.password
  )
}
export const CreateUserWithEmail = (
  emailAndPass: EmailAndPass
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(
    auth,
    emailAndPass.email,
    emailAndPass.password
  )
}
