import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const testimonnils = [
 
  {
    name: "sara jones",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
    profession: "interior designer",
    img: "https://i.postimg.cc/qvTQc3Pp/user1-free-img-1.jpg",
  },
  {
    name: "sara jones",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
    profession: "interior designer",
    img: "https://i.postimg.cc/qvTQc3Pp/user1-free-img-1.jpg",
  },
  {
    name: "Jessica Foxx",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
    profession: "student",
    img: "https://i.postimg.cc/kX8ftchj/testimonial-2.jpg",
  },
  {
    name: "Briana Luke",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
    profession: "student",
    img: "https://i.postimg.cc/qvxw17ry/user3-free-img.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="testimonial-container">
        <div className="text-center my-5">
            <h4>TESTIMONIALS</h4>
            <h2>WHAT OUR CLIENT SAYS</h2>
        </div>
      <Slider {...settings}>
          {
              testimonnils.map(testimonial=><div className=" ">
            <div className="d-flex align-items-center bg-light me-3">
            <div>
                <img src={testimonial.img} height='150px' alt="" />
            </div>
            <div className="ms-3 text-justify ">
                <h4>{testimonial.name}</h4>
                <p className="mb-0">{testimonial.des}</p>
                <small>{testimonial.profession}</small>
            </div>
            </div>

              </div>)
          }
      </Slider>
    </Container>
  );
};

export default Testimonials;