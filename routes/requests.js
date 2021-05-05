import express from 'express';
import {
    getRequestsAll, 
    getSingleRequestPerUser, 
    createSingleRequest
} from '../controllers/companyRequests.js';
import verifyToken from '../middlewares/verifyToken.js'

const requests = express.Router();

requests.get("/", getRequestsAll);
requests.get("/:id", getSingleRequestPerUser);
requests.post("/requestevent",  verifyToken, createSingleRequest);


export default requests;