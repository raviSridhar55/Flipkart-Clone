import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Ratings from "../components/Ratings";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  // const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='mb-5' to='/'>
        <i class='fas fa-long-arrow-alt-left fa-2x'></i>
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
          <div className='button-group mt-3'>
            <Button className='cart-btn action cart-focus'>
              <i class='fas fa-shopping-cart' /> Add to Cart
            </Button>
            <Button className='buy-btn action buy-focus'>
              {" "}
              <i class='fas fa-bolt' /> Buy Now
            </Button>
          </div>
        </Col>
        <Col md={7}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
              <p
                className={
                  "fw-bold " +
                  (product.countInStock <= 5 && product.countInStock >= 1
                    ? "text-warning"
                    : product.countInStock > 5
                    ? "text-success"
                    : "text-danger")
                }
              >
                {product.countInStock <= 5 && product.countInStock >= 1
                  ? "Hurry, only a few left"
                  : product.countInStock > 5
                  ? "In Stock"
                  : "Out of Stock"}
              </p>
              <h4 className='fw-bold'>₹{product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='mb-5'>Seller: {product.seller}</div>
              <div>Description: {product.description}</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
