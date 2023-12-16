import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap';

const ProductDetails = ({ products }) => {
    const params = useParams();
    const product = products.find(p => p.id == params.id);
    
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            
            <Row>
                <Col md={6}>
                    <Image src={product.images[0]} alt={product.title} fluid />
                </Col>
                <Col md={3}>
                    
                </Col>
            </Row>
        </>    
        
    );
    
};

export default ProductDetails;