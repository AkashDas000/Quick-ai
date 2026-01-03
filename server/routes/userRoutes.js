import express from "express";
import { auth } from "../middlewares/auth.js";
import { getPublishCreations, getUserCreations, toggleLikeCreation } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/get-user-creation', auth, getUserCreations)
userRouter.get('/get-publish-creation', auth, getPublishCreations)
userRouter.post('/toggle-like-creation', auth, toggleLikeCreation)

export default userRouter