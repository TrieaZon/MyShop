import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';
import axios from 'axios';

const ProductList = () => {
    
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);  
      };
      
      fetchProducts();
    },[]);
  
    const productsArray = products.map((product, i) => {
        return (
            <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard
                key={ product.id }
                id={ product.id }
                image={ product.images[0] }
                title={ product.title }
                price={ product.price }
                rating={ product.rating }
                />
            </Col>
        );
    });
    return (
        <>
            { productsArray }
        </>
    );
    
};

export default ProductList;