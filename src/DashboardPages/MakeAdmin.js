 
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import uploadImg from '../images/upload.png'
const MakeAdmin = () => {
    const {
        register,
        handleSubmit, 
        formState: { errors },
        reset
      } = useForm();
      const onSubmit = (data) =>{
           
          fetch('http://localhost:4000/users/admin',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
          })
          .then(res=> res.json())
          .then(data=> {
              if(data.modifiedCount){
                  alert('admin added successfully')
                  reset()
              }
          })
        console.log(data.email)}
    return (
        <div className="store-container py-5 ">
        <Container className="bg-white rounded p-3"> 
          <Row md={2} xs={1}> 
            <Col >
            <h4>Make an Admin</h4>
              <form className="d-flex flex-column shipping-form" onSubmit={handleSubmit(onSubmit)}> 
                <input   {...register("email", { required: true })} placeholder='admin email' />  
               
                {errors.email && <span>This field is required</span>} 
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

export default MakeAdmin;