import React from 'react';
import Products from '../Products';
import { Col, Row } from 'react-bootstrap';
import products from '../../products';

const HomeScreen = () => {
  return (
    <>
      <h2>Some Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;