import express from 'express';
import {
    getIdeasAll, 
    getSingleIdea, 
    createSingleIdea
} from '../controllers/ideas.js';
import verifyToken from '../middlewares/verifyToken.js'
import imgUpload from '../middlewares/image-uploader.js';

const ideas = express.Router();

ideas.get("/", getIdeasAll);
ideas.get("/:id", getSingleIdea);
ideas.post("/create-idea", verifyToken, imgUpload.single('idea_img'), createSingleIdea);


export default ideas;