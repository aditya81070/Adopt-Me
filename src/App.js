const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.type),
    React.createElement('h2', {}, props.breed)
  ])
}
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(Pet, {
      name: 'Luna',
      type: 'Dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      type: 'Bird',
      breed: 'Cool'
    }),
    React.createElement(Pet, {
      name: 'Henary',
      type: 'Dog',
      breed: 'Goodish'
    })
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))