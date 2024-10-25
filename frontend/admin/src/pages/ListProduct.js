import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ListProducts.module.css';
import CreateProduct from './CreateProduct'; 
const apiUrl = import.meta.env.VITE_API_URL;

const ListProducts = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingShoe, setEditingShoe]  = useState(null); // For editing state

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/shoes`);
                setShoes(response.data.data);
            } catch (error) {
                setError('Failed to fetch shoes.');
            } finally {
                setLoading(false);
            }
        };

        fetchShoes();
    }, []);

    // Function to handle Delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/api/shoes/${id}`);
            setShoes(shoes.filter(shoe => shoe._id !== id));
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Failed to delete product', error);
            alert('Failed to delete product');
        }
    };

    // Function to handle Edit
    const handleEdit = (shoe) => {
        setEditingShoe(shoe);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1>List of Products</h1>
            {shoes.length > 0 ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoes.map((shoe) => (
                            <tr key={shoe._id}>
                                <td>{shoe.name}</td>
                                <td>{shoe.brand}</td>
                                <td>{shoe.color}</td>
                                <td>{shoe.quantity}</td>
                                <td>{shoe.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(shoe)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(shoe._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products found.</p>
            )}
             <CreateProduct editingShoe={editingShoe} />
           
        </div>
    );
};

export default ListProducts;
