import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Ratings from "../components/Ratings";

const Products = ({ product }) => {
  return (
    <>
      <Card border='light' className='products my-3 p-3 rounded'>
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='div' className='product-name'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <div className='d-flex justify-content-between align-items-center'>
            <Card.Title as='h4'>&#x20b9;{product.price}</Card.Title>
            <Card.Text as='div'>
              <Ratings value={product.rating} text={product.numReviews} />
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Products;
