import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Row } from 'react-bootstrap';

const HomeScreen = ({ products }) => {
    
    
    
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