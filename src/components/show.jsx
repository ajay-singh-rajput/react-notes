import React, { useState } from "react";
import { toast } from "react-toastify";

const show = (props) => {
    const {users, setusers} = props
    
const deleteHandler = (ind)=>{
    const user = [...users]
    user.splice(ind, 1);
    console.log(user)
    setusers([...user]);
    localStorage.setItem('users', JSON.stringify(user));
    toast.warn('user deleted successfully')
   }

   const newcss = "flex justify-between p-2 my-2 bg-slate-300 rounded-sm w-[300px]"
   
  return (
    <ol className="list-disc">
      {users.map((user, index)=>{
        return <li key={index} className={newcss}><p>{user.username}</p> <span className="flex gap-2"><i className="ri-pencil-line"></i><i className="ri-delete-bin-line" onClick={deleteHandler}></i></span></li>
      }).reverse()}
      
    </ol>
  )
}

export default show