import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='home-container'>
        <h1>GitHub Arena: Battle your friends and earn bragging rights</h1>
        <Link className='button' to='/arena'>Fight!</Link>
      </div>
    )
  }
}

export default Home