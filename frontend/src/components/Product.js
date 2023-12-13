import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({product}) => {
    const products = fetch('https://dummyjson.com/products')
    .then(res => res.json());
    
    return (
        // <Card className='my-5 p-3 rounded'>
        //     <Card.Img src={}
        //     fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(console.log);
        // </Card>
        console.log(products)
    );
};

export default Product;