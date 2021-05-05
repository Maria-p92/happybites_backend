import express from 'express';
import {
    getRequestsAll, 
    getSingleRequest, 
    createSingleRequest
} from '../controllers/companyRequests.js';
import verifyToken from '../middlewares/verifyToken.js'

const requests = express.Router();

requests.get("/", getRequestsAll);
requests.get("/:id", getSingleRequest);
requests.post("/requestevent",  verifyToken, createSingleRequest);


export default requests;