import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import SearchParams from './SearchParams'
import Details from './Details'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'
const App = () => {
  const themeHook = useState('darkblue')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
