import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../hooks/contextProvider';

const Logout = () => {
    const navigate = useNavigate() ;
    const {setUser, setToken}= useStateContext() ;
    setToken(null) ; 
    setUser(null) ; 
    navigate("/signin");
  return (
    <div>
      <h1>Logout</h1>
      
    </div>
  );
};

export default Logout;