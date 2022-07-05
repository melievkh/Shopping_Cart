import React from 'react';
import Wrapper from './Admin.style';
import Order from './containers/Orders/Order';
import Sidebar from './containers/Sidebar/Sidebar';

export const Admin = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Order />
    </Wrapper>
  );
};
