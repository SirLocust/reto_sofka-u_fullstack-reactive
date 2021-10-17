import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import { LoginButtos } from '../Login/LoginButtos'

const Navbar: React.FC<PropsFromRedux> = (props) => {
  const user = props.user.uid

  return (
    <nav>
      <section>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
        {user && (
          <>
            <Link to="/new">New</Link>
            <Link to="/list">List</Link>
          </>
        )}
      </section>
      <LoginButtos user={user} />
    </nav>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Navbar)
