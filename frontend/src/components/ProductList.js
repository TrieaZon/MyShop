import React from 'react';
import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';

const ProductList = ({ products }) => {
    const productsArray = products.map((product) => {
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