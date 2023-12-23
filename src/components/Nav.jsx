import React from 'react'
import { Link } from 'react-router-dom'
Link

const Nav = () => {
  return (
    <nav className='flex justify-center gap-10 text-xl px-3'>
      <Link to="/">Home</Link>
      <Link to="/create">create</Link>
      <Link to="/profile">profile</Link>
    </nav>
  )
}

export default Nav