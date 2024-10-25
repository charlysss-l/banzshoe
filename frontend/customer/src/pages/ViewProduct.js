import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './ViewProduct.css'; // Import the CSS file
const apiUrl = import.meta.env.VITE_API_URL;

const ViewProduct = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShoes = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${apiUrl}/api/shoes`);
                console.log('Fetched shoes:', response.data);
                setShoes(response.data.data);
            } catch (err) {
                console.error('Error fetching shoes:', err);
                setError(`Failed to fetch shoes. ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchShoes();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="product-container">
            <h1>View Products</h1>
            <div className="product-grid">
                {shoes.length > 0 ? (
                    shoes.map((shoe) => (
                        <ProductCard key={shoe._id} shoe={shoe} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default ViewProduct;
