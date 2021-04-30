import express from 'express';
import {
    getIdeasAll, 
    getSingleIdea, 
    createSingleIdea
} from '../controllers/ideas.js';

const ideas = express.Router();

ideas.get("/", getIdeasAll);
ideas.get("/:id", getSingleIdea);
ideas.post("/create-idea", createSingleIdea);


export default ideas;