import React from 'react';
import Wrapper from './Admin.style';
import Orders from './Orders/Orders';
import Sidebar from './Sidebar/Sidebar';

export const Admin = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Orders />
    </Wrapper>
  );
};
