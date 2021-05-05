import express from 'express';
import { 
    getAllCompanies, 
    getSingleCompany, 
    createCompanyProfile,
    removeCompany,
    updateCompany
} from '../controllers/companyProfile.js';
import verifyToken from '../middlewares/verifyToken.js'

const companies = express.Router();

companies.get("/", getAllCompanies);
companies.get("/:id", getSingleCompany);
companies.post("/newcompanyprofile", createCompanyProfile); // dont use it, use UserProfile 
companies.delete("delete/:id", removeCompany);
companies.put("/:id", updateCompany);



export default companies;