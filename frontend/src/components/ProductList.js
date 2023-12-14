import React from 'react';
import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';

const ProductList = ({ products }) => {
    const productsArray = products.map((product, i) => {
        return (
            <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard
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