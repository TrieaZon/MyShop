import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ title, price, rating, image }) => {
    
    return (
        <Card className='my-5 p-3 rounded'>
            <Card.Img alt={`${title} picture`} src={image} variant='top' />
            <Card.Body>
            
                <Card.Title as='div'>
                    <strong>{title}</strong>
                </Card.Title>
                
                <Card.Text as='div'>
                    {price}
                </Card.Text>
                <Card.Text as='div'>
                    {rating}
                </Card.Text>
                
            </Card.Body>
            
        </Card>
    );
};

export default ProductCard;