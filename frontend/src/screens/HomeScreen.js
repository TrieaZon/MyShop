import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Row } from 'react-bootstrap';

const HomeScreen = () => {
    
    
    
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                <ProductList />
            </Row>
        </>    
    );
};

export default HomeScreen;