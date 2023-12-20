import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductDetails = ({ products }) => {
    const params = useParams();
    
    
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            
            <Row>
                <Col md={6}>
                    <Image src={ product.images[0] } alt={ product.title } fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{ product.title }</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={ product.rating }/>
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${ product.price }
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: { product.description }
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${ product.price }</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        { product.stock > 0 ? 'In Stock' : 
                                        'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Button 
                                    className='btn-block'
                                    type='button'
                                    disabled={product.stock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>    
        
    );
    
};

export default ProductDetails;