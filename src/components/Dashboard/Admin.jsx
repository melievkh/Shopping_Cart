import React from 'react';
import Wrapper from './Admin.style';
import Bookings from './containers/Bookings/Bookings';
import Sidebar from './containers/Sidebar/Sidebar';

export const Admin = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Bookings/>
    </Wrapper>
  );
};
