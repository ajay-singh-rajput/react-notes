import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className='flex justify-center gap-10 text-xl px-3'>
      <NavLink to="/" style={(e)=>{return{
        color:e.isActive?"red":""
      }}}>Home</NavLink>
      <NavLink to="/create" style={(e)=>{return{
        color:e.isActive?"red":""
      }}}>create</NavLink>
      <NavLink to="/profile" className={(e)=>{return e.isActive ? "text-blue-500 font-bold" :""
      }}>profile</NavLink>
      <NavLink to="/product" className={(e)=>{return e.isActive ? "text-blue-500 font-bold" :""
      }}>product</NavLink>
    </nav>
  )
}

export default Nav