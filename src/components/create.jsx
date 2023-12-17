import React, { useState } from "react";
import { toast } from "react-toastify";

const create = (props) => {
    const {users, setusers} = props
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
const sumbitHandler = (e)=>{
    e.preventDefault()
    if(username.trim().length < 4 || password.trim().length < 4){
      toast.error('username must have min 4 character')
      return;
    } else {
      const user = {username, password}
      const newuser = [...users,user]
      setusers([...users,user])
      localStorage.setItem('users',JSON.stringify(newuser))
      toast.success('user created')
      setusername('');
      setpassword('')
    }
    
  }
  return (
    <form className="flex gap-2 p-5 bg-slate-100 flex-col" onSubmit={sumbitHandler}>
      <h1 className='text-3xl text-slate-600'>Registration Form</h1>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)} value={username}/>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} value={password}/>
      <button className="bg-slate-700 p-3 text-red-50 rounded-md">Submit</button>
    </form>
  )
}

export default create