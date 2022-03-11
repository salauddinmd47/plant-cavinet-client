import React,{useState,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
// const testimonnils = [
 
//   {
//     name: "sara jones",
//     des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
//     profession: "interior designer",
//     img: "https://i.postimg.cc/qvTQc3Pp/user1-free-img-1.jpg",
//   },
//   {
//     name: "sara jones",
//     des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
//     profession: "interior designer",
//     img: "https://i.postimg.cc/qvTQc3Pp/user1-free-img-1.jpg",
//   },
//   {
//     name: "Jessica Foxx",
//     des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
//     profession: "student",
//     img: "https://i.postimg.cc/kX8ftchj/testimonial-2.jpg",
//   },
//   {
//     name: "Briana Luke",
//     des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam officia a incidunt facilis saepe ut rerum reiciendis corporis consequatur!",
//     profession: "student",
//     img: "https://i.postimg.cc/qvxw17ry/user3-free-img.jpg",
//   },
// ];

const Testimonials = () => {
const [testimonials, setTestimonials] = useState([]);

useEffect(()=>{
  fetch(' https://whispering-bayou-14441.herokuapp.com/testimonials')
  .then(res=> res.json())
  .then(data=> setTestimonials(data))
},[])

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
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
            <h5>TESTIMONIALS</h5>
            <h4>WHAT OUR CLIENT SAYS</h4>
        </div>
      <Slider {...settings}>
          {
              testimonials.map(testimonial=><div key='testimonial._id' className=" ">
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
