import { Router } from "express";
import {
  create,
  deletePost,
  editLike,
  getDetails,
  getMyPost,
  getPost,
}

from "../controllers/post.controller.js";
import { auth } from "../middleware/authMiddlware.js";

const route = Router();



route.get("/myPosts", auth, getMyPost);
route.get("/", getPost);
route.post("/", auth, create);
route.get("/:id", auth, getDetails);
route.put("/:id", auth, editLike);
route.delete("/:id",auth, deletePost);


export default route;
