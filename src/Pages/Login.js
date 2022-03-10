import { Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import registerImg from '../images/register.png'
import loginImg from '../images/login.png'
import useFirebase from "../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
 

const Login = () => {
    const {registerUser, loginUser, success, googleSignIn} = useFirebase()
    const [checked, setChecked] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const location = useLocation()
    const navigate = useNavigate()
    const handleCheck= e => { 
        setChecked(e.target.checked)
    }
    const handleOnChange = e => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = {...userInfo}
         newUserData[field] = value;
         setUserInfo(newUserData)
        
    }
  const handleUserSubmit = (e) => {
    e.preventDefault();
    if(checked){
        registerUser(userInfo.email, userInfo.password,userInfo.name, location, navigate)
    }else{
        loginUser(userInfo.email, userInfo.password,location, navigate)
    }
   
    e.target.reset()
     
   
   
  };
  return (
    <>
    <Navigation/>
    <div className="store-container py-5">
      <Container className="bg-white rounded p-5">
        {checked?<h4 className="text-center">Please Register</h4>:<h4 className="text-center">Please Login</h4>}
       
        <Row md={2} xs={1}>
        <Col>
          {!checked?<img src={registerImg} className='img-fluid' alt="" />:<img src={loginImg} className='img-fluid' alt="" />}
          </Col>
          <Col className="store-container p-5  rounded mt-3">
          {success&& <h4 className="text-center text-success">{success}</h4>}
            <form
              onSubmit={handleUserSubmit}
              className="   "
            >
             {
                 checked && <> <Form.Label htmlFor="basic-url">Name</Form.Label>
                 <InputGroup className="mb-3">
                   <FormControl 
                   placeholder="name"
                    type="text" 
                    name='name'
                    onChange={handleOnChange}

                    />
                 </InputGroup>
                 </>
             }
              <Form.Label htmlFor="basic-url">Email</Form.Label>
              <InputGroup className="mb-3">
                <FormControl 
                placeholder="email"
                 type="email"
                 name='email'
                 onChange={handleOnChange}
                  />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Password</Form.Label>
              <InputGroup className="mb-3">
                <FormControl 
                placeholder="password" 
                type="password" 
                name='password'
                onChange={handleOnChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox onClick={handleCheck} aria-label="Checkbox for following text input" />
                
                {checked?<span> New User? Please Register</span>:<span>Already Registered? Please login</span>}
                {/* <FormControl aria-label="Text input with checkbox" /> */}
              </InputGroup>
              <Button type="submit" variant="success" className="w-25 mx=auto">
                {checked?'Register':'Login'}
              </Button>
            </form>
            <Button onClick={()=> googleSignIn(location, navigate)} className="mt-3 w-75">Google SignIn</Button>
          
          </Col>
         
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Login;
