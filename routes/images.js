import express from 'express';
import imgUpload from '../middlewares/image-uploader.js';
import {createUserProfile} from '../controllers/userProfile.js'
import verifyToken from '../middlewares/verifyToken.js'
const imageRouter = express.Router(); 

imageRouter.post("/upload", verifyToken, imgUpload.single('profile_img'), createUserProfile);

export default imageRouter;