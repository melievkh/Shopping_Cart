import React from 'react';
import {
  Dropdown,
  DropdownContent,
  RegisterButton,
  Wrapper,
} from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import FlexBox from '../../Flexbox/FlexBox';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import Search from '../Search/Search';

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Wrapper>
      <Basket />
      <Search />
      {isLoggedIn ? (
        <FlexBox row gap="10px">
          <Dropdown>
            <TbUserCircle
              style={{
                fontSize: '30px',
                cursor: 'pointer',
              }}
            />
            <DropdownContent>
              <Button onClick={() => logout()}>chiqish</Button>
            </DropdownContent>
          </Dropdown>
          <Heading secondary>{username}</Heading>
        </FlexBox>
      ) : (
        <FlexBox row gap="20px">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button>
              <FiLogIn /> Kirish
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <RegisterButton>
              <FiUserPlus /> Ro'yhatdan o'tish
            </RegisterButton>
          </Link>
        </FlexBox>
      )}
    </Wrapper>
  );
};

export default Navbar;
