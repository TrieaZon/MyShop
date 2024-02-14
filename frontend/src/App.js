import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';


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
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
