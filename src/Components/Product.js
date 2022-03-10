import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Col>
      {/* <Link className="text-decoration-none" to={`/product/${product._id}`}> */}
        <Card className="category-card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body className="text-dark">
            <Card.Title>{product.name}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <h4>{product.price}</h4>
              <Link
                className="text-decoration-none"
                to={`/product/${product._id}`}
              >
                <h4 className="btn-category">shop now</h4>
              </Link>
            </div>
          </Card.Body>
        </Card>
      {/* </Link> */}
    </Col>
  );
};

export default Product;
