import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const Edit = () => {


  const [users, setusers] = useContext(UserContext);
  const navigate = useNavigate()
  const {title} = useParams();
  const UserIndex = users.findIndex((u)=>u.username == title);
  const [user, setuser]= useState({
    username:users[UserIndex].username,
    password:users[UserIndex].password
  });
  const ChangeHandler = (e)=>{
    const copyuser = {...user};
    copyuser[e.target.name] = e.target.value;
    setuser(copyuser)
  }

const sumbitHandler = (e)=>{
    e.preventDefault()
    const edituser = {username: user.username, password: user.password};
    if(user.username.trim().length < 4 || user.password.trim().length < 4){
      toast.error('username must have min 4 character')
      return;
    } else {
        const copyusers = [...users];
        copyusers[UserIndex] = edituser;
        setusers(copyusers);
      localStorage.setItem('users',JSON.stringify(copyusers))
      toast.success('user updated')
      navigate('/profile')
    }
    
  }
  return (
    <form className="flex gap-2 p-5 bg-slate-100 flex-col" onSubmit={sumbitHandler}>
      <h1 className='text-3xl text-slate-600'>Registration Form</h1>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="text" placeholder='username' onChange={ChangeHandler} value={user.username} name="username"/>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="password" placeholder='password' onChange={ChangeHandler} value={user.password} name="password"/>
      <button className="bg-slate-700 p-3 text-red-50 rounded-md">Submit</button>
    </form>
  )
}

export default Edit