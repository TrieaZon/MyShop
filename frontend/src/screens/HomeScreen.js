import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
    
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json')
        .then(res => res.json())
        .then(products => {setProducts(products)});
  },[]);
    
    return (
        <div>
        
            <ProductList products={ products }/>
        
        </div>    
    );
};

export default HomeScreen;