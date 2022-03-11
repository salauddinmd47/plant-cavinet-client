import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import uploadImg from '../images/upload.png'
const AddProduct = () => {
    const {
        register,
        handleSubmit, 
        formState: { errors },
        reset
      } = useForm();
      const onSubmit = (data) =>{
          fetch(' https://whispering-bayou-14441.herokuapp.com/products',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res=> res.json())
          .then(data=> {
               if(data.insertedId){
                   alert('New product added')
                   reset()
               }
          })
         }
    return (
        <div className="store-container py-5 ">
        <Container className="bg-white rounded p-3"> 
          <Row md={2} xs={1}> 
            <Col >
            <h4>ADD PRODUCT</h4>
              <form className="d-flex flex-column shipping-form" onSubmit={handleSubmit(onSubmit)}>
                  <p>Name</p> 
                <input   {...register("name")} placeholder="name" />
                <p>Description</p> 
                <input   {...register("des", { required: true })} placeholder="description" /> 
                {errors.email && <span>This field is required</span>}
                <p>Price</p> 
                 
                <input   {...register("price", { required: true })} placeholder='category' />
                
                
                <Row md={2}>
                    <Col className="w-50" >
                    <p>Category</p>
                    <input   {...register("category", { required: true })} placeholder='category' />
               
               {errors.city && <span>This field is required</span>}
                    </Col>
                    <Col className="w-50">
                    <p>Rating</p>
                    <input type="number"   {...register("rating", { required: true })} placeholder="rating" />
               
               {errors.area && <span>This field is required</span>}
            </Col>
           
                </Row>
                <p>Upload Photo</p>
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

export default AddProduct;