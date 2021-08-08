import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-1'>
      <Container>
        <Row>
          <Col className='text-center'>&copy; Flipkart Clone</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
