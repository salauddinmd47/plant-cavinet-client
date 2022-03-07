import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import products from "../fakeData/products";

const Products = () => {
  // const [plants, setPlants] = useState([])
  // const [cactus, setCactus] = useState([])
  const [toggle, setToggle] = useState(false);
  const cactus = products.filter((product) => product.category === "cactus");
  const plants = products.filter((product) => product.category === "plants");
  console.log(cactus);
  return (
    <div>
        <div className="text-center  mt-5 mb-3">
              <h4>CATEGORIES</h4>
              <h2>OUR FEATURED CATEGORIES</h2>
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
              {plants.map((plant, index) => (
                <Col>
                  <Card className="">
                    <Card.Img variant="top" src={plant.img} />
                    <Card.Body className=" ">
                      <Card.Title>{plant.name}</Card.Title>
                        <span>{plant.price}</span>
                      <Card.Text className="btn-category">
                        see collection
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
        {!toggle && (
          <div>
            <h2>Cactus</h2>
            <Row xs={2} md={4} className="g-4 mt-2">
              {cactus.map((cactus, index) => (
                <Col>
                  <Card className="">
                    <Card.Img variant="top" src={cactus.img} />
                    <Card.Body className="">
                      <Card.Title>{cactus.name}</Card.Title>
                      <span>{cactus.price}</span>
                      <Card.Text className="btn-category">
                        see collection
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
