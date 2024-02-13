import { Router } from "express";
import { login, register,getProfile,editProfile } from "../controllers/auth.controller.js";
import { auth } from "../middleware/authMiddlware.js";

const route = Router();

route.post("/register",register);
route.post("/login",login);
route.get("/getProfile",auth,getProfile )
route.put("/",editProfile)
export default route;
