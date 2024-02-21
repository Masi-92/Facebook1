import { Router } from "express";
import {
  create,
  deletePost,
  editLike,
  getDetails,
  getPost,
  getPostById,
  

} from "../controllers/post.controller.js";
import { auth } from "../middleware/authMiddlware.js";

const route = Router();

route.get("/", getPost);
route.post("/",auth ,create,);
route.get("/:id",auth, getDetails);
route.put("/:id",auth, editLike);
route.delete("/:id",deletePost)

route.get('/posts/user/:userId',auth, getPostById);

export default route;
