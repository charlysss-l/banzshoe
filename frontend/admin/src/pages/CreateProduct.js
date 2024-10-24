import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateProduct.module.css';

const CreateProduct = () => {
   const [formData, setFormData] = useState({
       name: '',
       brand: '',
       color: '',
       quantity: '',
       price: '',
   });

   const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const response = await axios.post('http://localhost:5000/api/shoes', formData);
           alert('Product created successfully');
           console.log(response.data);
       } catch (error) {
           console.error(error);
           alert('Failed to create product');
       }
   };

   return (
       <div className={styles.container}>
           <h1>Create Product</h1>
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   name="name"
                   placeholder="Name"
                   value={formData.name}
                   onChange={handleChange}
                   required
               />
               <input
                   type="text"
                   name="brand"
                   placeholder="Brand"
                   value={formData.brand}
                   onChange={handleChange}
                   required
               />
               <input
                   type="text"
                   name="color"
                   placeholder="Color"
                   value={formData.color}
                   onChange={handleChange}
                   required
               />
               <input
                   type="number"
                   name="quantity"
                   placeholder="Quantity"
                   value={formData.quantity}
                   onChange={handleChange}
                   required
               />
               <input
                   type="number"
                   name="price"
                   placeholder="Price"
                   value={formData.price}
                   onChange={handleChange}
                   required
               />
               <button type="submit">Submit</button>
           </form>
       </div>
   );
};

export default CreateProduct;
