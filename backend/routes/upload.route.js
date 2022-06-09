import { Router } from "express";
import { uploadImages, listImages } from "../controllers/upload.controller.js";
import { authUser } from "../middlwares/auth.middleware..js";
import imageUpload from "../middlwares/imageUpload.middleware.js";

const router = Router();

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.post("/listImages", authUser, listImages);

export default router;
