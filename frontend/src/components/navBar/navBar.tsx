import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import { LoginButtos } from '../Login/LoginButtos'

const Navbar: React.FC<PropsFromRedux> = (props) => {
  const user = props.user.uid

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <Link className="brand" to="/">
            SOFANQUE
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
                  <span>Question</span>
                </Link>
              </li>
              {user && (
                <>
                  <li className="nav__item ">
                    <Link to="/new">
                      <i className="fas fa-home"></i>
                      <span>New</span>
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/list">
                      <span>List</span>
                    </Link>
                  </li>
                </>
              )}
              <LoginButtos user={user} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Navbar)
