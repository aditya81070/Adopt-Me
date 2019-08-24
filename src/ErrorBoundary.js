import React, { Component } from 'react'
import { Link, Redirect } from '@reach/router'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch({ err, info }) {
    console.log('Error boundary caught an error', err, info)
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listening. <Link to='/'>Click Here</Link>
          to go back to the home page or wait for five seconds.
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
