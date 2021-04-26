import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js';
import urlencodedParser from 'urlencoded-parser';
import companies from './routes/company.js'

const port = process.env.PORT || 3306;
const app = express(); 

const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3306'} 

app.use(express.json());
app.use(cors(CORSOption))
app.use(morgan('dev'));
app.use(urlencodedParser);

app.use('/company', companies)
app.get('/', (req, res) => res.send('Welcome to the API'));
app.listen(port, () => console.log(`Application running in Port ${port}`));