import express from 'express';
import {
    getEventsAll, 
    getSingleEvent, 
    createSingleEvent
} from '../controllers/eventRequested.js';

const events = express.Router();

events.get("/events", getEventsAll);
events.get("/event/:id", getSingleEvent);
events.post("/requestevent", createSingleEvent);


export default events;