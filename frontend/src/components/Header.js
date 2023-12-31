import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                
                    <Navbar.Brand href="/">MyShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'><i className='fas
                            fa-cart-plus'></i>Cart</Nav.Link>
                            <Nav.Link href='/login'><i className='fas
                            fa-user'></i>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;