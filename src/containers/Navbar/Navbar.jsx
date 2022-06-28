import React from 'react';
import Wrapper from './Navbar.style'
import Basket from '../Basket/Basket';

const Navbar = () => {
  return (
    <Wrapper style={{ position: 'fixed' }}>
      <Basket/>
      <ul>
        <a href="#suyuq">
          <li>Suyuq Ovqatlar</li>
        </a>
        <a href="#quyuq">
          <li>Quyuq Ovqatlar</li>
        </a>
        <a href="#salat">
          <li>Salatlar</li>
        </a>
        <a href="#ichimlik">
          <li>Ichimliklar</li>
        </a>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
