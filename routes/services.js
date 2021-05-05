import express from 'express';
import {
    getServicesAll,
    getSingleService,
    createSingleService
} from '../controllers/companyServices.js';
import verifyToken from '../middlewares/verifyToken.js'

const services = express.Router();

services.get('/', getServicesAll);
services.get('/:id', getSingleService);
services.post('/newservice', verifyToken, createSingleService);

export default services; 