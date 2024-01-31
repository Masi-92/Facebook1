import { Router } from "express";
import {
  create,
  editLike,
  getDetails,
  getPost,
} from "../controllers/post.controller.js";

const route = Router();

route.get("/", getPost);
route.post("/", create);
route.get("/:id", getDetails);
route.put("/:id", editLike);

export default route;
