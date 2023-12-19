import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';

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
                    <Image src={ product.images[0] } alt={ product.title } fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{ product.title }</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={ product.rating }/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${ product.price }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: { product.description }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${ product.price }</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        { product.stock > 0 ? 'In Stock' : 
                                        'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button 
                                    className='btn-block'
                                    type='button'
                                    disabled={product.stock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>    
        
    );
    
};

export default ProductDetails;