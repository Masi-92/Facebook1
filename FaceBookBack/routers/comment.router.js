import { Router } from "express";
import { auth } from "../middleware/authMiddlware.js";
import { createComment, getCommentByPostId } from "../controllers/comment.controller.js";

const route = Router();


route.post("/",auth,createComment )
route.get("/:id",auth,getCommentByPostId)
export default route;
