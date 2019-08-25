import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import SearchParams from './SearchParams'
import Details from './Details'
import ThemeContext from './ThemeContext'
const App = () => {
  const themeHook = useState('darkblue')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to='/'>Adopt me</Link>
        </header>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
