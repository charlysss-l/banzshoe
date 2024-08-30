import express from 'express'
import {PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose';
import {Shoes} from './models/shoesModel.js'

const app = express();
app.use(express.json());  

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Hi Liz ganda!');
})

//Route for POST NEW BOOK
app.post('/shoes', async (req,res) =>{
 try {
    if(
        !req.body.name ||
        !req.body.brand ||
        !req.body.color ||
        !req.body.quantity ||
        !req.body.price
    ) {
        return res.status(400).send({
            message: 'Send all required field name,brand,color,quantity, price',
        });
    }
    const newShoes = {
        name: req.body.name,
        brand: req.body.brand,
        color: req.body.color,
        quantity: req.body.quantity,
        price: req.body.price,
    };

    const shoes = await Shoes.create(newShoes);
    return res.status(201).send(shoes);
} catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
 }
});

//Route to Get All Shoes in database
app.get('/shoes', async (req, res) =>{
    try {
        const shoes = await Shoes.find({});
        return res.status(200).json({
            count:shoes.length,
            data: shoes
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});
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