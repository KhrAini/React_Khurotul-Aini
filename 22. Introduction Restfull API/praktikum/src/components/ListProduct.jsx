import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://6718b2617fc4c5ff8f4a9e83.mockapi.io/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1>List of Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.productName}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListProduct;
