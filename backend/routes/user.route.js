import { Router } from "express";
import {
  register,
  login,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getProfile,
  updateProfilePicture,
  updateCover,
  updateDetails,
  addFriend,
  cancelRequest,
  follow,
  unfollow,
  acceptRequest,
  unfriend,
  deleteRequest,
  search,
  addToSearchHistory,
  getSearchHistory,
  removeFromSearch,
  getFriendsPageInfos,
} from "../controllers/user.controller.js";
import { authUser } from "../middlwares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", authUser, getProfile);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.put("/updateCover", authUser, updateCover);
router.put("/updateDetails", authUser, updateDetails);
router.put("/addFriend/:id", authUser, addFriend);
router.put("/cancelRequest/:id", authUser, cancelRequest);
router.put("/follow/:id", authUser, follow);
router.put("/unfollow/:id", authUser, unfollow);
router.put("/acceptRequest/:id", authUser, acceptRequest);
router.put("/unfriend/:id", authUser, unfriend);
router.put("/deleteRequest/:id", authUser, deleteRequest);
router.post("/search/:searchTerm", authUser, search);
router.put("/addToSearchHistory", authUser, addToSearchHistory);
router.get("/getSearchHistory", authUser, getSearchHistory);
router.put("/removeFromSearch", authUser, removeFromSearch);
router.get("/getFriendsPageInfos", authUser, getFriendsPageInfos);

export default router;
