import React from 'react';
import Wrapper from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import colors from '../../assets/color/colors';

const Navbar = () => {
  return (
    <Wrapper style={{ position: 'fixed' }}>
      <Basket />
      <ul>
        <a href="#liquidFood">
          <li>Suyuq Ovqatlar</li>
        </a>
        <a href="#darkFood">
          <li>Quyuq Ovqatlar</li>
        </a>
        <a href="#salad">
          <li>Salatlar</li>
        </a>
        <a href="#drinks">
          <li>Ichimliklar</li>
        </a>
        <li style={{marginLeft: '20px'}}>
          <Link to="/login" style={{color: colors.white}}><FiLogIn/> Kirish</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
