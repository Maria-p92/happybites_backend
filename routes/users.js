import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    createUser
} from '../controllers/users.js'
import verifyToken from '../middlewares/verifyToken.js'

const users = express.Router();

users.get("/", getAllUsers);
users.get("/:id", getSingleUser);
users.post("/newuser", verifyToken, createUser);

export default users;