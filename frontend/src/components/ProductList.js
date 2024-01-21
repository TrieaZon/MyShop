import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';
import axios from 'axios';

const ProductList = () => {
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
            console.log(data)
            setIsLoading(false); 
      };
      fetchProducts();
    },[isLoading]);
  
    const productsArray = products.map(p => {
        return (
            <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard
                key={ p._id }
                id={ p._id }
                image={ p.image }
                title={ p.name }
                price={ p.price }
                rating={ p.rating }
                />
            </Col>
        );
    });

    if(isLoading) {
        return <h1>Loading...</h1>
    } else {
        return (
            <>
                { productsArray }
            </>
        );    
    };   
};

export default ProductList;