import express from 'express';
import { 
    getAllCompanies, 
    getSingleCompany, 
    createCompanyProfile 
} from '../controllers/companyProfile.js';

const companies = express.Router();

companies.get("/companies", getAllCompanies);
companies.get("/company/:id", getSingleCompany);
companies.post("/newcompanyprofile", createCompanyProfile);


export default companies;