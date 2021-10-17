import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Page from '../models/Page'

export default interface Route {
  path: string
  name: string
  exact: boolean
  component: FunctionComponent<Page & RouteComponentProps<any>>
  props?: any
}
