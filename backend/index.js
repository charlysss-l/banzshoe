

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoesRoute from './routes/shoesRoute.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

const allowedOrigins =[
    'https://banzshoe-customer.vercel.app',
    'https://banzshoe-admin.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  

app.use('/api/shoes', shoesRoute);


//mongoDB connection using mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  }).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));
  
  
  app.get('/', (req, res) => {
    res.send('Express app is running');
  });
  
  app.listen(port, (err) => {
    if (err) {
      console.error(`Error starting server: ${err}`);
    } else {
      console.log(`Server running on port ${port}`);
    }
  });
  
  
  
  