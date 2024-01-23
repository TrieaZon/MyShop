import React from 'react';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
    
    const productsArray = products.map(p => {
        return (
            <Col key={ p._id } sm={12} md={6} lg={4} xl={3}>
                <ProductCard
                id={ p._id }
                image={ p.image }
                title={ p.name }
                price={ p.price }
                rating={ p.rating }
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