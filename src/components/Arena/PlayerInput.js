import React from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const value = e.target.value
    this.setState({
      username: value
    }) 
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.onSubmit(this.props.id, this.state.username)
  }

  render () {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>{this.props.label}</label>
        <input id='username' placeholder='GitHub username' type='text' value={this.state.username} onChange={this.handleChange} autoComplete='off'/>
        <button className='button' type='submit' disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PlayerInput