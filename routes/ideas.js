import express from 'express';
import {
    getIdeasAll, 
    getSingleIdea, 
    createSingleIdea
} from '../controllers/ideas.js';
import verifyToken from '../middlewares/verifyToken.js';

const ideas = express.Router();

ideas.get("/", getIdeasAll);
ideas.get("/:id", getSingleIdea);
ideas.post("/create-idea", verifyToken, createSingleIdea);


export default ideas;