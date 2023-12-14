import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductCard = ({ title, price, rating, image }) => {
    
    return (
        <Card className='my-5 p-3 rounded'>
            <Card.Img alt={`${title} picture`} src={image} variant='top' />
            <Card.Body>
            
                <Card.Title as='div'>
                    <strong>{title}</strong>
                </Card.Title>
                
                <Card.Text as='div'>
                    ${price}.00
                </Card.Text>
                <Rating value={rating} />
                
            </Card.Body>
            
        </Card>
    );
};

export default ProductCard;