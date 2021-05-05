import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js';
import urlencodedParser from 'urlencoded-parser';
import companies from './routes/company.js'
import users from './routes/users.js';
import requests from './routes/requests.js';
import auth from './routes/auth.js';
import ideas from './routes/ideas.js';
import favorites from './routes/favorites.js'
import userprofile from './routes/userprofile.js'
import services from './routes/services.js'

const port = process.env.PORT || 5000;
const app = express(); 
const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'} 

app.disable('etag');
app.use(express.json());
app.use(cors({origin: process.env.ORIGIN ? process.env.ORIGIN  :'*'}))
app.use(morgan('dev'));
app.use(urlencodedParser);
app.use('/company', companies);
app.use('/users', users);
app.use('/requests', requests);
app.use('/ideas', ideas);
app.use('/favorites', favorites);
app.use('/userprofile', userprofile);
app.use('/services', services);
app.use('/', auth)



app.get('/', (req, res) => res.send(`<h1>Welcome to the API</h1><h2>Users</h2>
<p>To get all Users: /users</p>
<p>To get single user by id: /users/:id</p>
<h2>User_profile</h2>
<p>To get all User_profile: /userprofile</p>
<p>To get single User_profile by id: /userprofile/:id</p>
<p>To post new profile in company or user profile: /userprofile/newuserprofile</p>
<h2>Company</h2>
<p>To get all companies: /company</p>
<p>To get single company by id: /company/:id</p>
<h2>Requests/Events</h2>
<p>To get all requests: /requests</p>
<p>To get single requests by id: /requests/:id</p>
<p>To post an new requests: /requests/requestevent</p>
<h2>Favorites</h2>
<p>To get all favorites: /favorites</p>
<p>To get single favorite by id: /favorites/:id</p>
<p>To post a new favorite: /favorites/add-to-fav</p>
<h2>Ideas</h2>
<p>To get all ideas: /ideas</p>
<p>To get single idea by id: /ideas/:id</p>
<p>To post an new idea: /ideas/create-idea</p>
<h2>Services</h2>
<p>To get all services: /services</p>
<p>To get single services by id: /services/:id</p>
<p>To post an new services: /services/newservice</p>`));
app.listen(port, () => console.log(`Application running in Port ${port}`));