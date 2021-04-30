import express from 'express';
import {
    getFavsAll, 
    getSingleFav, 
    createSingleFav
} from '../controllers/favorites.js';

const ideas = express.Router();

ideas.get("/", getFavsAll);
ideas.get("/:id", getSingleFav);
ideas.post("/add-to-fav", createSingleFav);


export default ideas;