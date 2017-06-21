import React from 'react'
import PlayerInput from './Arena/PlayerInput'
import PlayerPreview from './Arena/PlayerPreview'
import { Link } from 'react-router-dom'

class Arena extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne: {
        image: null,
        name: null
      },
      playerTwo: {
        image: null,
        name: null
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit (id, username) {
    this.setState({
      [id]: {
        name: username,
        image: 'https://github.com/' + username + '.png?size=200'
      }
    })
  }

  handleReset (id) {
    this.setState({
      [id]: {
        name: null,
        image: null
      }
    })
  }

  render () {
    const playerOneName = this.state.playerOne.name
    const playerTwoName = this.state.playerTwo.name
    const match = this.props.match

    return (
      <div>
        <div className='row'>
          { 
            !playerOneName ?
              <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} /> :
              <PlayerPreview avatar={this.state.playerOne.image} username={this.state.playerOne.name} id='playerOne'>
                <button className='reset' onClick={this.handleReset.bind(null, 'playerOne')}>Reset</button>
              </PlayerPreview>
          }
          {
            !playerTwoName ?
              <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} /> :
              <PlayerPreview avatar={this.state.playerTwo.image} username={this.state.playerTwo.name} id='playerTwo'>
                <button className='reset' onClick={this.handleReset.bind(null, 'playerTwo')}>Reset</button>
              </PlayerPreview>
          }
        </div>
        {
          playerOneName && playerTwoName &&
            <Link className='button' to={{
              pathname: match.url + '/results',
              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
            }}>Start Battle!</Link>
        }
      </div>
    )
  }
}

export default Arena