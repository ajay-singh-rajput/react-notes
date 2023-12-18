import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Create from "./components/create";
import Show from "./components/show";
import Home from "./components/Home";
import css from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";



const App = () => {

  const [users, setusers] = useState(JSON.parse(localStorage.getItem('users')) || [])


  return (
    // here we write view code
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" rel="stylesheet"></link>
    <div className="w-screen h-screen flex py-3 flex-col items-center justify-middle bg-red-100">
    <nav className='flex justify-center gap-10 text-xl px-3'>
      <Link to="/">Home</Link>
      <Link to="/create">create</Link>
      <Link to="/profile">profile</Link>
    </nav>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create users={users} setusers={setusers}/>}/>
        <Route path='/profile' element={<Show users={users} setusers={setusers}/>}/>
      </Routes>
    
    
    </div>
    </>
  )
}

export default App