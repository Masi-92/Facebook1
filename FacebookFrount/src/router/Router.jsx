import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Sting from "../pages/Sting1/Sting"
import { Details } from "../component/Details"


const Router = () => {
  return (
    <Routes>

<Route path="/Home"  element= {<Home/>} />
<Route path="/Profile"  element= {<Profile/>}/>
<Route path="/sting"  element= {<Sting/>} />
<Route path="/details/:id"  element= {<Details/>} />



    </Routes>
  )
}

export default Router