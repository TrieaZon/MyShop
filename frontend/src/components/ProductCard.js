import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductCard = ({ title, price, rating, image, id }) => {
    
    return (
        
        <Card className='my-5 p-3 rounded'>
            
            <Link to={`/product/${id}`}>
                <Card.Img alt={`${title} picture`} src={image} variant='top' />
            </Link>
                
                <Card.Body>
                
                    <Link to={`/product/${id}`}>
                        <Card.Title as='h4'>
                            <strong>{title}</strong>
                        </Card.Title>
                    </Link>
                    
                    <Card.Text as='h5'>
                        <em>${price}.00</em>
                    </Card.Text>
                    <Rating value={rating} />
                </Card.Body>
            
            
        </Card>
        
    );
};

export default ProductCard;