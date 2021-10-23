import React from 'react'
import { useForm } from 'react-hook-form'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { EmailAndPass } from '../interfaces/models/EmailAndPass'

import Page from '../interfaces/models/Page'

import { RootState } from '../store/store'
import { createUserEmailAction } from '../thunkActions/authThunk'

const RegisterPage: React.FC<Page & RouteComponentProps<any> & PropsFromRedux> =
  ({ dispatch, history }) => {
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="login100-form validate-form"
            >
              <span className="login100-form-title p-b-55">Register</span>

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

              <div className="contact100-form-checkbox m-l-4">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>

              <div className="container-login100-form-btn p-t-25">
                <button className="login100-form-btn">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

const mapStateToProps = (state: RootState) => ({
  loading: state.questionReducer.loading,
  questions: state.questionReducer.questions,
  userId: state.authReducer.uid,
  hasError: state.questionReducer.hasErrors,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RegisterPage)
