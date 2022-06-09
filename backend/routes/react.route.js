import { Router } from "express";
import { reactPost, getReacts } from "../controllers/react.controller.js";
import { authUser } from "../middlwares/auth.middleware.js";

const router = Router();
router.put("/reactPost", authUser, reactPost);
router.get("/getReacts/:id", authUser, getReacts);
export default router;
