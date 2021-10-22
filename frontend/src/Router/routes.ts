import QuestionFormPage from './../pages/QuestionFormPage'
import Route from '../interfaces/route/Route'
import AnswerFormPage from '../pages/AnswerFormPage'
import { HomePage } from '../pages/HomePage'
import OwnerQuestionsPage from '../pages/OwnerQuestionsPage'
import QuestionPage from '../pages/QuestionPage'
import SingleQuestionPage from '../pages/SingleQuestionPage'

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
  {
    path: '/question/:id',
    name: 'Single Question Page',
    component: SingleQuestionPage,
    exact: true,
  },
]
export const routesPrivate: Route[] = [
  {
    path: '/list',
    name: 'List Owner',
    component: OwnerQuestionsPage,
    exact: true,
  },
  {
    path: '/answer/:id',
    name: 'Answer ',
    component: AnswerFormPage,
    exact: true,
  },
  {
    path: '/new',
    name: 'Answer ',
    component: QuestionFormPage,
    exact: true,
  },
]
