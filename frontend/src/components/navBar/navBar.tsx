import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'

import { SignOutButton } from '../Login/SignOutButton'
import logo from '../../Asstets/logo.png'
const Navbar: React.FC<PropsFromRedux> = ({ userAut }) => {
  const user = userAut.uid
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <img className="logo_img" src={logo} alt="" />
          <Link className="brand" to="/">
            SOFQ&A
          </Link>
        </div>
        <div className="site-header__end">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item ">
                <Link to="/">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/questions">
                  <i className="fas fa-question-circle"></i>
                  <span>Questions</span>
                </Link>
              </li>
              {user && (
                <>
                  <li className="nav__item ">
                    <Link to="/new">
                      <i className="fas fa-plus-square"></i>
                      <span>New</span>
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/list">
                      <i className="fas fa-clipboard-list"></i>
                      <span>List</span>
                    </Link>
                  </li>
                </>
              )}
              {!user && (
                <li className="nav__item ">
                  <Link to="/login">
                    <i className="fas fa-user"></i>
                    <span>Login</span>
                  </Link>
                </li>
              )}
              <SignOutButton user={user} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  userAut: state.authReducer,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Navbar)
