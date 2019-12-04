import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import SearchParams from './SearchParams'
import Details from './Details'
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to='/'>Adopt me</Link>
        </header>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
