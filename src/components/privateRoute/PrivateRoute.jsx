import React from 'react';
import { useSelector } from 'react-redux';
import { Admin } from '../../Pages/Dashboard/Admin';
import Main from '../../App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    navigate('/');
  }, [isLoggedIn]);

  return userRole === 'user' ? <Main /> : <Admin />;
};

export default PrivateRoute;
