import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="flex space-x-6 m-auto  ">

    <NavLink to="/Login">Login</NavLink>
    <NavLink to="/Register">Register</NavLink>
    <NavLink to="/Getalluser">Getalluser</NavLink>
    <NavLink to="/Id">Id</NavLink>
    </div>
    </>
  )
}

export default Header