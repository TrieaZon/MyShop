import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
// import axios from './axios';

function App() {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json')
    .then(res => res.json())
    .then(products => {setProducts(products)});
  },[]);
  
  return (
    <>
      <Router>
        <Header />
        
        <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen products={ products }/>} />
              <Route path='/product/:id' element={<ProductDetails products={ products }/>} />
            </Routes>
          </Container>
        </main>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
