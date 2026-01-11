import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink
       to="/"
       style={({isActive}) => ({
        color: isActive ? 'red' : 'black'
       })}
       >Home</NavLink>

        <NavLink to="/about"
       style={({isActive}) => ({
        color: isActive ? 'red' : 'black'
       })}
        >
            About</NavLink>
    </div>
  )
}

export default Navbar