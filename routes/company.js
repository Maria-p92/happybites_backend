import express from 'express';
import {
    getCompanyDetailsAll, 
    getSingleCompany
} from '../controllers/companyDetails.js';

const companies = express.Router();

companies.get("/companydetails", getCompanyDetailsAll);
companies.get("/companydetails/:id", getSingleCompany);

export default companies;