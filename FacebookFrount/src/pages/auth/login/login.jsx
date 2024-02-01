import React, { useState } from 'react'
import { login } from '../../../Api/auth.api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handelLogin =()=>{
login(email,password)
.then(()=>{

navigate("/Home")
}).catch(()=>{


})
    }

  return (
    <div>login

<div>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='email'/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='pass' />
        <button onClick={handelLogin}>login </button>
      </div>
    </div>
  )
}

export default Login