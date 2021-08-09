import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Ratings from "../components/Ratings";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
          {/* <Row>Product Name</Row> */}
          <div className='button-group mt-3'>
            <Button className='cart-btn action'>Add to Cart</Button>
            <Button className='buy-btn action'>Buy Now</Button>
          </div>
        </Col>
        <Col md={7}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
