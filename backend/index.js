// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoesRoute from './routes/shoesRoute.js'; // Make sure this path is correct
import { PORT, mongoDBURL } from './config.js'; // Ensure you have these configurations

const app = express();


app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    return res.status(200).send('API is running!');
});

app.use('/api/shoes', shoesRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
