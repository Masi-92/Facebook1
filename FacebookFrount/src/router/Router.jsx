import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Sting from "../pages/Sting1/Sting"
import { Details } from "../component/Details"
import Login from "../pages/auth/login/login"
import Register from "../pages/auth/register/register"
import AddPost from "../pages/addPost/Addpost"

const Router = () => {
  return (
    <Routes>

<Route path="/Home"  element= {<Home/>} />
<Route path="/Profile"  element= {<Profile/>}/>
<Route path="/sting"  element= {<Sting/>} />
<Route path="/details/:id"  element= {<Details/>} />
<Route path="/login" element = {<Login/>}/>
<Route path="/register" element ={<Register/>}/>
<Route path="/add" element ={<AddPost/>}/>


    </Routes>
  )
}

export default Router