import React from "react";
import categoryImg1 from "../images/plant6-free-img-1.jpg";
import categoryImg2 from "../images/cactus2-free-img.jpg";
import categoryImg3 from "../images/plant4-free-img.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Beautiful Plant Varieties",
    des: "we have a world of amazing beautiful plants which definitely attracts you",
    img: categoryImg1,
  },
  {
    name: "Trendy Cactus Varieties",
    des: "providing cactus to enhance your house fibulas looking and make it green",
    img: categoryImg2,
  },
  {
    name: "Gardening Accessories",
    des: "Our gardening accessories may you can not controls your self to buy",
    img: categoryImg3,
  },
];
const Categories = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
      {categories.map((category, index) => (
         
          <Col className="" key={index}>
            <Card className="category-card  ">
              <Card.Img variant="top" src={category.img} />
              <Card.Body className="card-info">
                <Card.Title>{category.name}</Card.Title>
                <Card.Text> 
                    {category.des}
                </Card.Text>
                <Card.Text className="btn-category"> 
                  <Link to='/store'>  see collection</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> 
      ))}
          
      </Row>
      
    </Container>
  );
};

export default Categories;
