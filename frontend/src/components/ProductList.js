import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';
import axios from 'axios';

const ProductList = () => {
    
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        const fetchProducts = async () => {
            console.log('home page effect ran');
            const {data} = await axios.get('/api/products');
            setProducts(data);  
      };
      fetchProducts();
    },[]);
  
    const productsArray = products.map((product, i) => {
        return (
            <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard
                key={ products[i].id }
                id={ products[i].id }
                image={ products[i].images[0] }
                title={ products[i].title }
                price={ products[i].price }
                rating={ products[i].rating }
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