import React from 'react'
import { useForm } from 'react-hook-form'
import { connect, ConnectedProps } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { LoaderLoading } from '../components/Loading/LoaderLoading'
import { LoginGoogleButton } from '../components/Login/LoginGoogleButton'
import { EmailAndPass } from '../interfaces/models/EmailAndPass'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import { loginWhitEmailAction } from '../thunkActions/authThunk'

const LoginPage: React.FC<Page & RouteComponentProps<any> & PropsFromRedux> = ({
  dispatch,
  history,
  loading,
  hasError,
}) => {
  const { register, handleSubmit } = useForm<EmailAndPass>()

  const onSubmit = (data: EmailAndPass) => {
    dispatch(loginWhitEmailAction(data)).then((e: any) => {
      if (!e.error) {
        history.push(`/`)
      }
    })
  }
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
          {!loading && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="login100-form validate-form"
            >
              <span className="login100-form-title p-b-55">Login</span>
              {hasError && (
                <div className="error login100-form-title ">
                  <span className="error">{hasError}ppp</span>
                </div>
              )}
              <div
                className="wrap-input100 validate-input m-b-16"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register('email')}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope"></span>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-16"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  {...register('password')}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-lock"></span>
                </span>
              </div>

              <div className="container-login100-form-btn p-t-25">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center w-full p-t-42 p-b-22">
                <span className="txt1">Or login with</span>
              </div>

              <LoginGoogleButton history={history} />

              <div className="text-center w-full p-t-115">
                <span className="txt1">No eres Usuario </span>

                <Link to="/register" className="txt1 bo1 hov1">
                  Registrate
                </Link>
              </div>
            </form>
          )}
          {loading && <LoaderLoading />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.authReducer.loading,
  questions: state.questionReducer.questions,
  userId: state.authReducer.uid,
  hasError: state.authReducer.error,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(LoginPage)
