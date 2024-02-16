import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Sting from "../pages/Sting1/Sting"
import { Details } from "../component/Details"
import Login from "../pages/auth/login/login"
import Register from "../pages/auth/register/register"
import AddPost from "../pages/addPost/Addpost"
import SwipeableDrawer from "../component/SwipeableDrawer/SwipeableDrawer"
import EditProfile from "../component/SwipeableDrawer/editeProfile/EditProfile"
const Router = () => {
  return (
    <Routes>

<Route path="/home"  element= {<Home/>} />
<Route path="/profile"  element= {<Profile/>}/>
<Route path="/sting"  element= {<Sting/>} />
<Route path="/details/:id"  element= {<Details/>} />
<Route path="/login" element = {<Login/>}/>
<Route path="/register" element ={<Register/>}/>
<Route path="/add" element ={<AddPost/>}/>
<Route path="/drawer" element = {<SwipeableDrawer/>}/>
<Route path="/editProfile" element = {<EditProfile/>}/>

    </Routes>
  )
}

export default Router