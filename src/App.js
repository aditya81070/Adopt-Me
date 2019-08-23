import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'
const App = () => {
  return (
    <div id='something-important'>
      <h1>Adopt me</h1>
      <Pet name='Luna' type='Dog' breed='Havanese' />
      <Pet name='Joya' type='Cat' breed='cool' />
      <Pet name='Akm' type='Bird' breed='Goodish' />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
