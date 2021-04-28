import express from 'express';
import { 
    getAllCompanies, 
    getSingleCompany, 
    createCompanyProfile 
} from '../controllers/companyProfile.js';

const companies = express.Router();

companies.get("/", getAllCompanies);
companies.get("/:id", getSingleCompany);
companies.post("/newcompanyprofile", createCompanyProfile);


export default companies;