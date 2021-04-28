import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    createUser
} from '../controllers/users.js'

const users = express.Router();

users.get("/", getAllUsers);
users.get("/:id", getSingleUser);
users.post("/newuser", createUser);

export default users;