import express from 'express';
import { 
    getAllUserProfiles, 
    getSingleUserProfile, 
    createUserProfile 
} from '../controllers/userProfile.js'

const userprofile = express.Router();

userprofile.get("/", getAllUserProfiles);
userprofile.get("/:id", getSingleUserProfile);
userprofile.post("/newuserprofile", createUserProfile);

export default userprofile;