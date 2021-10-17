// eslint-disable-next-line import/no-unresolved
import Route from '../interfaces/route/route'
import { HomePage } from '../pages/HomePage'

export const routesPublic: Route[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
]
export const routesPrivate: Route[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
]
