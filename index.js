import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js';
import './db/mongoose.js';

const port = process.env.PORT || 5000;
const app = express(); 

app.use(cors({origin: '*'}));
app.use(morgan('dev'));

app.use(express.json());
app.use('/', (req, res) => {
    res.send(
        "<h2>API - endpoints available<h2/>"
    );
});


app.listen(port, () => console.log(`Application running in Port ${port}`));