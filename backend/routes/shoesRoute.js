
import express from 'express';
import {Shoes} from '../models/shoesModel.js';
const router = express.Router();
//Route for Save a new Shoes
router.post('/', async (req,res) =>{
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
router.get('/', async (req, res) =>{
       try {
           const shoes = await Shoes.find();
           return res.status(200).json({count:shoes.length, data: shoes});
       } catch (error) {
           console.log(error.message);
           res.status(500).send({message: error.message});
       }
   });
   
   //Route to Get One Shoes in database by id
router.get('/:id', async (req, res) =>{
       try {
           const {id} = req.params;
   
           const shoe = await Shoes.findById(id);
           return res.status(200).json(shoe);
       } catch (error) {
           console.log(error.message);
           res.status(500).send({message: error.message});
       }
   });
   
   //Route for Update a Shoes
router.put('/:id', async (req,res) =>{
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
          const {id} = req.params;
          const result = await Shoes.findByIdAndUpdate(id, req.body);
           if(!result){
               return res.status(404).json({message: 'Shoes not found'});
           }
           return res.status(200).send({message: 'Shoes updated successfully'})
       } catch (error) {
           console.log(error.message);
           res.status(500).send({message: error.message});
       }
   
   });
   
   //Route Delete a book
router.delete('/:id', async (req,res) =>{
       try {
           const {id} = req.params;
           const result = await Shoes.findByIdAndDelete(id);
   
           if(!result){
               return res.status(404).json({message: 'Shoes not found'});
           }
           return res.status(200).send({message: 'Shoes deleted successfully'})
       } catch (error) {
           console.log(error.message);
           res.status(500).send({message:error.message});
       }
   });


   export default router;