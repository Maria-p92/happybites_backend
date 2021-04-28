import jwt from 'jsonwebtoken';
import express from 'express';
import {signIn} from '../controllers/signIn.js'
import {register} from '../controllers/register.js'

const auth = express.Router();

auth.post('/signin', signIn);
auth.post('/signup', register)

export default auth; 