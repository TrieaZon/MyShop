import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


const HomeScreen = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

    const productList = useSelector((state) => state.productList)
    const {loading, products, error} = productList
    
    return (
        <>
            <h1>Latest Products</h1>
            
                {
                    loading ? (<Loader />) :
                        error ? (<Message variant='danger'>{error}</Message>) :
                        (<Row>
                            <ProductList products={ products } />
                        </Row>)
                }
                
            
        </>    
    );
};

export default HomeScreen;