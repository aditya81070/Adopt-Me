import React, { Component } from 'react'
import pet from '@frontendmasters/pet'
import { navigate } from '@reach/router'
import Modal from './Modal'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import { connect } from 'react-redux'

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  }
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) =>
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
      )
      .catch(err => {
        console.log(err)
      })
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  adopt = () => navigate(this.state.url)
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }
    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      showModal
    } = this.state
    return (
      <div className='details'>
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className='buttons'>
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>
                    No, I am not that guy.
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ theme }) => ({ theme })
const WrappedDetails = connect(mapStateToProps)(Details)
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
    </ErrorBoundary>
  )
}
