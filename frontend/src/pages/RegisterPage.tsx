import React from 'react'
import { useForm } from 'react-hook-form'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { LoaderLoading } from '../components/Loading/LoaderLoading'
import { EmailAndPass } from '../interfaces/models/EmailAndPass'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import { createUserEmailAction } from '../thunkActions/authThunk'

const RegisterPage: React.FC<Page & RouteComponentProps<any> & PropsFromRedux> =
  ({ dispatch, history, hasError, loading }) => {
    const { register, handleSubmit } = useForm<EmailAndPass>()

    const onSubmit = (data: EmailAndPass) => {
      dispatch(createUserEmailAction(data)).then((e: any) => {
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
                <span className="login100-form-title p-b-55">Register</span>
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
                  <button className="login100-form-btn">Register</button>
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

export default connector(RegisterPage)
