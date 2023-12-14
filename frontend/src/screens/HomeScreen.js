import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Row } from 'react-bootstrap';

const HomeScreen = () => {
    
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json')
        .then(res => res.json())
        .then(products => {setProducts(products)});
  },[]);
    
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                <ProductList products={ products }/>
            </Row>
        </>    
    );
};

export default HomeScreen;