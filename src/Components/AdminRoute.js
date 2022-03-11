import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth'
const AdminRoute = ({children, ...rest}) => {
    const {user, loading, admin} = useAuth()
    console.log(user)
    const location = useLocation()
    if(loading && !user.email){
        return  <Spinner animation="border" variant="info" />
    }
    
        if (user.email && admin) {
            return children;
            
          }
          return <Navigate to="/" state={{ from: location }} replace />;
        
          
    
        }
export default AdminRoute;