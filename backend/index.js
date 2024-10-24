import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoesRoute from './routes/shoesRoute.js';
import { PORT, mongoDBURL } from './config.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    res.send('Express app is running');
});

app.use('/api/shoes', shoesRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Express server is running and listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
        process.exit(1); 
    });
