import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 h-10 items-center place-content-evenly bg-blue-200 font-serif rounded-lg'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
    

    </div>
  )
}

export default Navbar