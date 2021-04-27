import express from 'express';
import {
    getCompanyDetailsAll, 
    getSingleCompany, 
    createSingleCompany
} from '../controllers/companyDetails.js';
import { 
    getAllLocations, 
    getSingleLocation, 
    createCompanyProfile 
} from '../controllers/companyProfile.js';

const companies = express.Router();

companies.get("/companydetails", getCompanyDetailsAll);
companies.get("/companydetails/:id", getSingleCompany);
companies.post("/new", createSingleCompany);

companies.get("/locations", getAllLocations);
companies.get("/locations/:id", getSingleLocation);
companies.post("/newcompanyprofile", createCompanyProfile);




export default companies;