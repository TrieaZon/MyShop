import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    Row, Col, Image, Card, Button, ListGroup, ListGroupItem,
    Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductDetails = () => {

    const [qty, setQty] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(listProductDetails(id))
    },[dispatch, id]);

    const productDetails = useSelector((state) => state.productDetails);
    const {loading, product, error} = productDetails;

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {
                loading ? (<Loader />) :
                error ? (<Message variant='danger'>{error}</Message>) :
                (
                    <Row>
                        <Col md={6}>
                            <Image className="rounded-4" src={ product.image } alt={ product.title } fluid />
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
                                                { product.countInStock > 0 ? 'In Stock' : 
                                                'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control
                                                        as='select'
                                                        value={qty}
                                                        onChange={e => setQty(e.target.value)}
                                                        >
                                                        {
                                                            [...Array(product.countInStock).keys()].map(x => (<option 
                                                                    key={x+1}
                                                                    value={x+1}
                                                                    >{x+1}</option>))
                                                        }

                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )

                                    }

                                    <ListGroupItem>
                                        <Button 
                                            className='btn-block'
                                            type='button'
                                            onClick={addToCartHandler}
                                            disabled={product.stock === 0}
                                        >
                                            Add To Cart
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </>    
        
    );
}

export default ProductDetails;