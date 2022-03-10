import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth'
const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth()
    console.log(user)
    const location = useLocation()
    if(loading && !user.email){
        return  <Spinner animation="border" variant="info" />
    }
    
        if (user.email) {
            return children;
            
          }
          return <Navigate to="/login" state={{ from: location }} replace />;
        
          
    
        }
export default PrivateRoute;