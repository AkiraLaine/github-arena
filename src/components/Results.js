import React from 'react'
import queryString from 'query-string'
import { battle } from '../utils/api'
import Player from './Results/Player'
import Loading from './Loading'

class Results extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    const players = queryString.parse(this.props.location.search)
    battle([players.playerOneName, players.playerTwoName])
      .then(data => {
        if (!data) this.setState({ error: 'There was an error. Deal with it.', loading: false })
        this.setState({
          winner: data[0],
          loser: data[1],
          loading: false
        })
      })
  }

  render () {
    if (this.state.loading) {
      return (
        <Loading />
      )
    } 
    if (this.state.error) {
      return (
        <p>{this.state.error}</p>
      )
    }
    return (
      <div className='row'>
        <Player label='Winner' score={this.state.winner.score} profile={this.state.winner.profile} />
        <Player label='Loser' score={this.state.loser.score} profile={this.state.loser.profile} />
      </div>
    )
  }
}

export default Results