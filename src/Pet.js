import React from 'react'
export default function Pet({ name, type, breed }) {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
    React.createElement('h2', {}, breed)
  ])
}
