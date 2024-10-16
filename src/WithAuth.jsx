import React from 'react';
import { useNavigate } from 'react-router-dom';


const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      navigate('/login');
      return null; 
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
