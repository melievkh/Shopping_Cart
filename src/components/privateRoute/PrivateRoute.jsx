import React from 'react';
import { useSelector } from 'react-redux';
import Main from '../../App';
import Orders from '../../Pages/Dashboard/Orders/Orders';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const PrivateRoute = () => {
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userRole = useSelector((state) => state.user.role);

  // useEffect(() => {
  //   navigate('/');
  // }, [isLoggedIn]);

  return userRole === 'admin' ? <Orders /> : <Main />;
};

export default PrivateRoute;
