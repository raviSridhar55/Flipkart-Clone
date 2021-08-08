import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "../components/Ratings";

const Products = ({ product }) => {
  return (
    <>
      <Card className='products my-3 p-3 rounded'>
        <a href={`/products/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </a>

        <Card.Body>
          <a href={`/products/${product._id}`}>
            <Card.Title as='div' className='product-name'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

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
