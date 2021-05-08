import express from 'express';
import {
    getServicesAll,
    getSingleService,
    createSingleService
} from '../controllers/companyServices.js';
import verifyToken from '../middlewares/verifyToken.js'
import imgUpload from '../middlewares/image-uploader.js';

const services = express.Router();

services.get('/', getServicesAll);
services.get('/:id', getSingleService);
services.post('/newservice', verifyToken, imgUpload.single('event_img'), createSingleService);

export default services; 