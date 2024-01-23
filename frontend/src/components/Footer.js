import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className='fw-bold text-center py-3 bg-primary' data-bs-theme="dark">
                        
                        Copyright &copy; MyShop
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;