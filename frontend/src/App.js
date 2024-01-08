import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';


function App() {
  
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
