import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import uploadImg from '../images/upload.png'
const AddReview = () => {
    const {
        register,
        handleSubmit, 
        formState: { errors },
        reset
      } = useForm();
      const onSubmit = (data) =>{
          fetch('http://localhost:4000/testimonials',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res=> res.json())
          .then(data=> {
               if(data.insertedId){
                   alert('Thanks for leaving your precious opinion for us')
                   reset()
               }
          })
         }
    return (
        <div className="store-container py-5 ">
        <Container className="bg-white rounded p-3"> 
          <Row md={2} xs={1}> 
            <Col >
            <h4>Leave A Review For Us</h4>
              <form className="d-flex flex-column shipping-form" onSubmit={handleSubmit(onSubmit)}>
                  <p>Name</p> 
                <input   {...register("name")} placeholder="name" />
                <p>Description</p> 
                <textarea   rows="4"  {...register("des", { required: true })} placeholder="description" /> 
                {errors.des && <span>This field is required</span>}
                <p>Profession</p> 
                 
                <input   {...register("profession", { required: true })} placeholder='profession' /> 
                 
                <p>Upload a Photo</p>
                <input     {...register("img", { required: true })} placeholder=" image url" />
               
                {errors.phone && <span>This field is required</span>} 
                <input type="submit" />
              </form>
            </Col>
            <Col>
            <img src={uploadImg} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AddReview;