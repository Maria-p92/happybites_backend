import express from 'express';
import {
    getCompanyDetailsAll, 
    getSingleCompany, 
    createSingleCompany
} from '../controllers/companyDetails.js';

const companies = express.Router();

companies.get("/companydetails", getCompanyDetailsAll);
companies.get("/companydetails/:id", getSingleCompany);
companies.post("/new", createSingleCompany);


export default companies;