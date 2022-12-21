import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <img src='../assets/Nav-img.png' alt="" width={'100px'} height={'100px'}/>
      <div>
      <NavLink to="#">Home
      </NavLink>
    <NavLink to="#">My Quiz</NavLink>
      </div>
       

      
    </div>
  )
}

export default Navbar
