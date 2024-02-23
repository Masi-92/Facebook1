import { Router } from "express";
import {
  create,
  deletePost,
  editLike,
  editPost,
  getDetails,
  getMyPost,
  getPost,
}

from "../controllers/post.controller.js";
import { auth } from "../middleware/authMiddlware.js";
import { getOthersPost } from "../controllers/post.controller.js";

const route = Router();




route.get("/myPosts", auth, getMyPost);
route.get("/getPosts/:id",auth,getOthersPost)
route.put("/editPost/:id" ,auth,editPost)
route.get("/", getPost);
route.post("/", auth, create);
route.get("/:id", auth, getDetails);
route.put("/:id", auth, editLike);
route.delete("/:id",auth, deletePost);

export default route;
