 
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/slider1.jpg'
import image2 from '../images/slider2.jpg'
import image3 from '../images/slider3.jpg'
import Navigation from './Navigation';
const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div>
         
          <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className='carousel-item item-one '>
         
        <Carousel.Caption className='position-absolute top-50 text-dark text-start mb-5 '>
        <h3>Best Quality Plants </h3>
        <h2 className='fw-bold'>Amazing Variety Of Plants Starting Just $6</h2>
          <p>We provide best quality product and ensure to have great experience from our client</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item item-two'> 

        <Carousel.Caption className='position-absolute top-50 text-dark text-start'>
          <h3>Best Quality Plants </h3>
          <h2 className='fw-bold'>Amazing Variety Of Plants Starting Just $6</h2>
          <p>We provide best quality product and ensure to have great experience from our client</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item item-three'> 
        <Carousel.Caption className='position-absolute top-50 text-dark text-start '>
        <h3>Best Quality Plants </h3>
          <h2 className='fw-bold'>Amazing Variety    Of  Plants Starting Just $6</h2>
          <p>We provide best quality product and ensure to have great experience from our client</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    
    );
};

export default Slider;