import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import products from "../fakeData/products";
import Product from "./Product";

const Products = () => {
  const [plants, setPlants] = useState([])
  const [cactus, setCactus] = useState([])
  const [toggle, setToggle] = useState(false);
  
  useEffect(()=>{
    fetch('http://localhost:4000/products')
    .then(res=> res.json())
    .then(data=> {
      const cactus = data.filter((product) => product.category === "cactus");
      const plants = data.filter((product) => product.category === "plants"); 
      setCactus(cactus)
      setPlants(plants)
    })
  },[])
  return (
    <div>
        <div className="text-center  mt-5 mb-3">
              <h5>CATEGORIES</h5>
              <h4>OUR FEATURED CATEGORIES</h4>
            </div>
      <div className="d-flex justify-content-center w-25 mx-auto mt-5 mb-3">
        <Button onClick={() => setToggle(true)} variant='outlined' className="border">Plants</Button>
        <Button onClick={() => setToggle(false)} className="ms-2 border" variant='outlined'>
          Cactus
        </Button>
      </div>

      <Container>
          
        {toggle && (
          <div>
            <h2>Plants</h2>
            <Row xs={2} md={4} className="g-4 mt-2">
              {plants.map( product=> <Product 
               product={product}
               key={product._id}
              ></Product>
                
              )}
            </Row>
          </div>
        )}
        {!toggle && (
          <div>
            <h2>Cactus</h2>
            <Row xs={2} md={4} className="g-4 mt-2">
              { 
                cactus.map( product=> <Product 
                  product={product}
                  key={product._id}
                 ></Product>
                   
                 )}
            
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
