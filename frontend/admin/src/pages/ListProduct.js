import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ListProducts.module.css';

const ListProducts = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shoes');
                setShoes(response.data.data);
            } catch (error) {
                setError('Failed to fetch shoes.');
            } finally {
                setLoading(false);
            }
        };

        fetchShoes();
    }, []);

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default ListProducts;
