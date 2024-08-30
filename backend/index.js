import express from 'express'
import {PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose';
import {Shoes} from './models/shoesModel.js';
import shoesRoute from './routes/shoesRoute.js';
import cors from 'cors';

const app = express();
//Middleware for parsing request body
app.use(express.json());  

//Middleware for handling CORS POLICY
//Option 1. Allow All Origin with Default of cors(*)
app.use(cors());
//Option 2. Allow Custome Origins
app.use(
    cors({
        origin:'http://localhost:5173',
        methods:['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders:['Content-Type'],
    })
);

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Hi Liz ganda!');
})

app.use('/shoes', shoesRoute);

mongoose.connect(mongoDBURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT, () =>{
            console.group(`App is listening to post: ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);

    });