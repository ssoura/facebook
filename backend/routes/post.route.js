import { Router } from "express";
import {
  createPost,
  getAllPosts,
  comment,
  savePost,
  deletePost,
} from "../controllers/post.controller.js";
import { authUser } from "../middlwares/auth.middleware.js";

const router = Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);
router.put("/savePost/:id", authUser, savePost);
router.delete("/deletePost/:id", authUser, deletePost);

export default router;
