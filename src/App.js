import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './SearchParams'
const App = () => {
  return (
    <div id='something-important'>
      <h1>Adopt me</h1>
      <SearchParams />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
