import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import PurchaseImg from '../images/purchase.png'
import { useParams } from "react-router-dom";
const Purchase = () => {
    const {user} = useAuth()
    const {productId} = useParams()
    const [product, setProduct] = useState({}); 
    useEffect(() => {
        fetch(`https://whispering-bayou-14441.herokuapp.com/products/${productId}`)
          .then((res) => res.json())
          .then(data=> setProduct(data))
           
      }, [productId]);
  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => { 
      const purchaseProduct = {productName:product.name, img:product.img, }
      let shippingInfo = {...data,purchaseProduct};
      
      fetch('https://whispering-bayou-14441.herokuapp.com/purchase',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(shippingInfo)
      })
      .then(res=> res.json())
      .then(data=> {
          if(data.insertedId){
              alert('Order placed Successfully') 
              reset()
          }
      })
     
    }
  return (
    <div>
      <Navigation />
      <div className="store-container py-5 ">
        <Container className="bg-white  p-3"> 
          <Row md={2} xs={1}> 
            <Col >
            <h4>Shipping Details</h4>
              <form className="d-flex flex-column shipping-form" onSubmit={handleSubmit(onSubmit)}>
                  <p>Name</p> 
                <input defaultValue={user.displayName} {...register("userName")} />
                <p>Email</p> 
                <input defaultValue={user?.email} {...register("email", { required: true })} />
               
                {errors.email && <span>This field is required</span>}
               <p>Phone number</p>
                <input defaultValue={user?.phone} {...register("phone", { required: true })} placeholder="phone number" />
               
                {errors.phone && <span>This field is required</span>}
                <Row md={2}>
                    <Col className="w-50" >
                    <p>City</p>
                    <input   {...register("city", { required: true })} placeholder='your city' />
               
               {errors.city && <span>This field is required</span>}
                    </Col>
                    <Col className="w-50">
                    <p>Area</p>
                    <input   {...register("area", { required: true })} placeholder="your area" />
               
               {errors.area && <span>This field is required</span>}
                    </Col>
                </Row> 
                <input type="submit" />
              </form>
            </Col>
            <Col>
            <img className="img-fluid" src={PurchaseImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Purchase;
