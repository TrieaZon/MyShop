import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    const productsArray = products.map((product, i) => {
        return (
            <ProductCard
            image={ products[i].images[i] }
            title={ products[i].title }
            price={ products[i].price }
            rating={ products[i].rating }
            />
        );
    });
    return (
        <>
            { productsArray }
        </>
    );
    
};

export default ProductList