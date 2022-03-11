import { Button, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import Navigation from "./Navigation";

const Shop = () => {
  const [product, setProduct] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foundCategory, setFoundCategory] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    fetch(` https://whispering-bayou-14441.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCategory(data.category);
        setProduct(data);
      });
  }, [productId]);
  useEffect(() => {
    fetch(` https://whispering-bayou-14441.herokuapp.com/products?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => { 
        const restProduct = data.filter(item=> item._id !== productId)
        setFoundCategory(restProduct.slice(0,3));
      });
  }, [selectedCategory]);
   

  const { name, des, price, img, category,_id } = product;
  return (
    <>
    <Navigation/>
      <div className="store-container py-5 ">
      <Container className="bg-white pt-5 p-3  ">
        <Row>
          <Col>
            <img src={img} className="img-fluid" alt="" />
          </Col>
          <Col className="lh-lg">
            <h2>{name}</h2>
            <h4 className="lh-lg"> {price}.00</h4>
            <p className="my-3">{des}</p>
            <Link to={`/purchase/${_id}`}><Button variant="danger px-4 rounded-pill">SHOP NOW</Button></Link>
            <hr />
            <p>category: {category}</p>
          </Col>
        </Row>
        <hr />

        <div className="d-flex justify-content-start     mt-5 mb-3">
          <Button
            onClick={() => setToggle(true)}
            variant="outlined"
            className="border"
          >
            Description
          </Button>
          <Button
            onClick={() => setToggle(false)}
            className="ms-2 border"
            variant="outlined"
          >
            Reviews (0)
          </Button>
        </div>
        {toggle && (
          <div>
            <p>{des}</p> 
          </div>
        )}
        {!toggle && (
          <div>
            <Row md={2} xs={1} className="my-3">
              <Col>
                <h4>Reviews</h4>
                <p>There are no reviews yet</p>
              </Col>
              <Col >
                <div className="w-75 bg-light py-3 px-2 rounded">
                <h4>Leave your pr ecious review</h4>
                <p>your review will help to upgrade our service</p>
                
                <div class="input-group">
                  <input
                    class="form-control"
                    type='number'
                    placeholder="Enter Rating number"
                    
                  ></input>
                </div>
                <br />
                <div class="input-group">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    placeholder="enter your comments"
                  ></textarea>
                </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
        <h4 className="text-start my-3">Related Products</h4>
        <Row md={4} xs={2} className="my-3">
        
          {foundCategory.map((item) => (
            <Product product={item}></Product>
          ))}
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Shop;
