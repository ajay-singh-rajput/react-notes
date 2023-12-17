import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Create from "./components/create";
import Show from "./components/show";
const App = () => {

  const [users, setusers] = useState(JSON.parse(localStorage.getItem('users')) || [])


  
 
  

  return (
    // here we write view code
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" rel="stylesheet"></link>
    <div className="w-screen h-screen flex py-3 flex-col items-center justify-middle bg-red-100">

    <Create users={users} setusers={setusers}/>
    <span></span>
    <Show users={users} setusers={setusers}/>
    </div>
    </>
  )
}

export default App