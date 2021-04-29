import jwt from 'jsonwebtoken';
import express from 'express';
import {signIn, register, getUserInfo} from '../controllers/auth.js';
import {verifyToken} from '../middlewares/verifyToken.js'

const auth = express.Router();

auth.post('/signin', signIn);
auth.post('/signup', register)
auth.get('/me', verifyToken, getUserInfo)

export default auth; 