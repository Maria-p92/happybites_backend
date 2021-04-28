import express from 'express';
import { 
    getAllLocations, 
    getSingleLocation, 
    createCompanyProfile 
} from '../controllers/companyProfile.js';

const companies = express.Router();

companies.get("/locations", getAllLocations);
companies.get("/locations/:id", getSingleLocation);
companies.post("/newcompanyprofile", createCompanyProfile);




export default companies;