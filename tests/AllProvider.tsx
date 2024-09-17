import { Provider } from 'react-redux'
import store from '../src/store'

const AllProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default AllProvider