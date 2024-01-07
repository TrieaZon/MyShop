import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from'./screens/ProductDetails';
import axios from 'axios';

function App() {
  
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);  
      };
      
      fetchProducts();
  },[]);
  
  return (
    <>
      <Router>
        <Header />
        
        <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
