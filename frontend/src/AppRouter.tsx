import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { Switch, Route, RouteComponentProps } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Fotter } from './components/Footer/Fotter'
import Navbar from './components/navBar/navBar'
import {
  routeLogin,
  routesLogin,
  routesPrivate,
  routesPublic,
} from './Router/routes'
import { RootState } from './store/store'

const AppRouter: React.FC<PropsFromRedux> = (props) => {
  const user = props.user.uid
  return (
    <BrowserRouter>
      <div className="container_init">
        <Navbar />
        <Switch>
          {routesPublic.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    {...props}
                    {...route.props}
                    name={route.name}
                  />
                )}
              />
            )
          })}
          {user &&
            routesPrivate.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      {...props}
                      {...route.props}
                      name={route.name}
                    />
                  )}
                />
              )
            })}
          {!user &&
            routesLogin.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      {...props}
                      {...route.props}
                      name={route.name}
                    />
                  )}
                />
              )
            })}
        </Switch>
      </div>
      <Fotter />
    </BrowserRouter>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AppRouter)
