import { Router } from "express";
import { login, register,getProfile,editProfile, getOthersProfile } from "../controllers/auth.controller.js";
import { auth } from "../middleware/authMiddlware.js";

const route = Router();


route.post("/register",register);
route.post("/login",login);
route.get("/:id",auth,getOthersProfile)
route.get("/getProfile",auth,getProfile )
route.put("/edit",auth,editProfile)
export default route;
