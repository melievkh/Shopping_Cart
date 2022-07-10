import React from 'react';
import { useSelector } from 'react-redux';
import { Admin } from '../Pages/Dashboard/Admin';
import Main from '../App';

const PrivateRoute = () => {
  const role = useSelector((state) => state.user.role);
  return <>{role === 'user' ? <Main /> : <Admin />}</>;
};

export default PrivateRoute;
