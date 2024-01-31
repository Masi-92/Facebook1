import { Router } from "express";
import {
  create,
  deletePost,
  editLike,
  getDetails,
  getPost,
} from "../controllers/post.controller.js";

const route = Router();

route.get("/", getPost);
route.post("/", create);
route.get("/:id", getDetails);
route.put("/:id", editLike);
route.delete("/:id",deletePost)

export default route;
