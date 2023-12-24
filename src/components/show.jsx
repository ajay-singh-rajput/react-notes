import React, { useContext, useState } from "react";
import { Link, Outlet  } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const show = () => {
  const [users, setusers] = useContext(UserContext)
    // const {users, setusers} = props
    
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
    <>
    <ol className="list-disc">
      {users.map((user, index)=>{
        return <li key={index} className={newcss}><Link to={`/profile/details/${user.username}`}><p>{user.username}</p> </Link><span className="flex gap-2"><Link to={`/profile/edit/${user.username}`}><i className="ri-pencil-line"></i></Link><i className="ri-delete-bin-line" onClick={()=>{deleteHandler(index)}}></i></span></li>
      }).reverse()}
      
    </ol>
    <div className="w-[80%]">
                <Outlet />
            </div>
      </>
  )
}

export default show