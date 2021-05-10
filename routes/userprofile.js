import express from 'express';
import { 
    getAllUserProfiles, 
    getSingleUserProfile, 
    createUserProfile 
} from '../controllers/userProfile.js'
import verifyToken from '../middlewares/verifyToken.js'; 
import imgUpload from '../middlewares/image-uploader.js';

const userprofile = express.Router(); 

userprofile.get("/", getAllUserProfiles);
userprofile.get("/getcurrentuser", verifyToken, getSingleUserProfile);
userprofile.post("/newuserprofile", verifyToken, imgUpload.single('profile_img'), createUserProfile);
userprofile.post('/just-img/upload', imgUpload.single('profile_img'), (req,res)=>res.json(req.file))

export default userprofile;