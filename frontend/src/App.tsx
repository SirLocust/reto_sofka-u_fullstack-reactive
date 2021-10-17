import { Provider } from 'react-redux'

import AppRouter from './AppRouter'

import { store } from './store/store'
import './styles.css'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
