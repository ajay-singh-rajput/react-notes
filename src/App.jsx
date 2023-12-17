import React from 'react'
import { useState } from 'react'
const App = () => {

  

  // here come vanial javascript of view
  // let abc = 'bcda'
  
  // const [abc,setabc] = useState('abcd')
  // const changeabc = ()=>{
  //   setabc('45464')
  // }
  
  // const [name, setname] = useState('ajay');
  // const changename = ()=>{
  //   setname('ajay rajput')
  // }
  // const othername = (newname)=>{setname(newname)}
  // let greet = 'hello'


  // day 3 code

  // const [username, setusername] = useState('');
  // const sumbithandler = (e)=>{
  //   e.preventDefault()
  //   // console.log(e.target.value)
  // }

  // day 4
  const [users, setusers] = useState([
    {
      username:'ajay', password:'d46s46'
    },
    {
      username:'sanjay', password:'4d64sa'
    },
    {
      username:'ramu', password:'d4sa5d'
    },
    {
      username:'lakhan', password:'64asd65'
    },
    {
      username:'virendra', password:'45s6d6'
    },
  ])
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
const sumbitHandler = (e)=>{
  e.preventDefault()
  const user = {username, password}
  setusers([...users,user])
  setusername('');
  setpassword('')
}
  
  return (
    // here we write view code
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" rel="stylesheet"></link>
    {/* day 1-2 code */}
    {/* <h1>{abc}</h1>
    <button onClick={changeabc}>update name</button>
    <button onClick={()=>othername(prompt)}>new name</button> */}

    {/* daye 3 code */}


    {/* <form onSubmit={sumbithandler} >
      <input type="text" name='username' onChange={(e)=>{setusername(e.target.value)}} value={username}/>
      <button>submit</button>
    </form> */}

    {/* day 4 */}
    <div className="w-screen h-screen flex py-3 flex-col items-center justify-middle bg-red-100">

    <form className="flex gap-2 p-5 bg-slate-100 flex-col" onSubmit={sumbitHandler}>
      <h1 className='text-3xl text-slate-600'>Registration Form</h1>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)} value={username}/>
      <input className="p-2 border-2 rounded-lg border-blue-800" type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} value={password}/>
      <button className="bg-slate-700 p-3 text-red-50 rounded-md">Submit</button>
    </form>
    <span></span>
    <ol className="list-disc">
      {users.map((user, index)=>{
        return <li key={index} className="flex justify-between p-2 my-2 bg-slate-300 rounded-sm w-[300px]"><p>{user.username}</p> <span className="flex gap-2"><i className="ri-pencil-line"></i><i className="ri-delete-bin-line"></i></span></li>
      }).reverse()}
      
    </ol>
    </div>
    </>
  )
}

export default App