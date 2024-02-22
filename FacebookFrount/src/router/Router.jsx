import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Sting from "../pages/Sting1/Sting";
import { Details } from "../component/Details";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";
import AddPost from "../pages/addPost/Addpost";
import EditProfile from "../component/SwipeableDrawer/editeProfile/EditProfile";
import Gallery from "../pages/Profile/gallery/Gallery";
import OthersProfile from "../pages/others/OthersProfile";
//import Drawer from "../component/SwipeableDrawer/Drawer"
const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sting" element={<Sting />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add" element={<AddPost />} />
      {/* <Route path="/drawer" element = {<Drawer/>}/>
       */}
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/gallery/:id" element={<Gallery />} />
      <Route path="/GetOthersProfile/:id" element={<OthersProfile />} />
    </Routes>
  );
};

export default Router;
