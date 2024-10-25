import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CreateProduct.module.css';

const CreateProduct = ({ editingShoe, setEditingShoe }) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    if (!apiUrl) {
        console.error("REACT_APP_API_URL is not defined!");
    } else {
        console.log('API URL:', apiUrl);
    }

    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        color: '',
        quantity: '',
        price: '',
    });

    useEffect(() => {
        if (editingShoe) {
            setFormData({
                name: editingShoe.name,
                brand: editingShoe.brand,
                color: editingShoe.color,
                quantity: editingShoe.quantity,
                price: editingShoe.price,
            });
        }
    }, [editingShoe]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingShoe) {
                await axios.put(`${apiUrl}/api/shoes/${editingShoe._id}`, formData);
                alert('Product updated successfully');
                setEditingShoe(null);
            } else {
                await axios.post(`${apiUrl}/api/shoes`, formData);
                alert('Product created successfully');
            }
            setFormData({ name: '', brand: '', color: '', quantity: '', price: '' });
        } catch (error) {
            console.error(error);
            alert('Failed to submit the product');
        }
    };

    return (
        <div className={styles.container}>
            <h1>{editingShoe ? 'Edit Product' : 'Create Product'}</h1>
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
                <button type="submit">{editingShoe ? 'Update Product' : 'Create Product'}</button>
            </form>
        </div>
    );
};

export default CreateProduct;
