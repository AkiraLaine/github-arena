import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = props => {
  return (
    <ul className='nav'>
      <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
      <li><NavLink activeClassName='active' to='/arena'>Arena</NavLink></li>
      <li><NavLink activeClassName='active' to='/top'>Top Gladiators</NavLink></li>
    </ul>
  )
}

export default Navbar