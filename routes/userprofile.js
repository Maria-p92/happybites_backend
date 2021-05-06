import express from 'express';
import { 
    getAllUserProfiles, 
    getSingleUserProfile, 
    createUserProfile 
} from '../controllers/userProfile.js'
import verifyToken from '../middlewares/verifyToken.js'

const userprofile = express.Router(); 

userprofile.get("/", getAllUserProfiles);
userprofile.get("/getcurrentuser", verifyToken, getSingleUserProfile);
userprofile.post("/newuserprofile", verifyToken, createUserProfile);

export default userprofile;