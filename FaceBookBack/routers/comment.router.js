import { Router } from "express";
import { auth } from "../middleware/authMiddlware.js";
import { createComment } from "../controllers/comment.controller.js";

const route = Router();


route.post("/",auth,createComment )

export default route;
