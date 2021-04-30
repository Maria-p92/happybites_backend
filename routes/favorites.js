import express from 'express';
import {
    getFavsAll, 
    getSingleFav,
    addToFav
} from '../controllers/favorites.js';

const favorites = express.Router();

favorites.get("/", getFavsAll);
favorites.get("/:id", getSingleFav);
favorites.post('/add-to-fav', addToFav);

export default favorites;