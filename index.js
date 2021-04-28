import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js';
import urlencodedParser from 'urlencoded-parser';
import companies from './routes/company.js'
import users from './routes/users.js';
import events from './routes/events.js'
import auth from './routes/auth.js'

const port = process.env.PORT || 3306;
const app = express(); 
const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3306'} 



app.use(express.json());
app.use(cors(CORSOption))
app.use(morgan('dev'));
app.use(urlencodedParser);
app.use('/company', companies)
app.use('/users', users)
app.use('/', events)
app.use('/', auth)



app.get('/', (req, res) => res.send('Welcome to the API'));
app.listen(port, () => console.log(`Application running in Port ${port}`));