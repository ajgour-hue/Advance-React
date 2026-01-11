import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>   
      <h1>About Page</h1>
       <div>
        <p>This is the about page of our website.</p>
       </div>
      <Outlet />
    </div>
  )
}

export default About
