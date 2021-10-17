import Route from '../interfaces/route/Route'
import { HomePage } from '../pages/HomePage'
import QuestionPage from '../pages/QuestionPage'

export const routesPublic: Route[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/questions',
    name: 'Question Page',
    component: QuestionPage,
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
