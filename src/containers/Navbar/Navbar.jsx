import React from 'react';
import { Dropdown, DropdownContent, Wrapper } from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogIn, FiSearch, FiUserPlus } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';

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
      <FlexBox wd="fit-content" flexDirection="row">
        <Input
          wd="400px"
          style={{ borderRadius: '8px 0 0 8px' }}
          type="search"
          placeholder="qidirish..."
        />
        <Button
          wd="30px"
          border="1px solid grey"
          style={{ borderRadius: '0 8px 8px 0' }}
        >
          <FiSearch />
        </Button>
      </FlexBox>
      {isLoggedIn ? (
        <Dropdown>
          <FlexBox flexDirection='row' gap='20px'>
            <TbUserCircle style={{ fontSize: '30px' }} />
            <DropdownContent>
              <Button onClick={() => logout()}>chiqish</Button>
            </DropdownContent>
            <Heading color={colors.white}>{username}</Heading>
          </FlexBox>
        </Dropdown>
      ) : (
        <FlexBox flexDirection="row" gap="20px">
          <Link to="/login" style={{ color: colors.black }}>
            <FiLogIn /> Kirish
          </Link>
          <Link to="/register" style={{ color: colors.black }}>
            <FiUserPlus /> Ro'yhatdan o'tish
          </Link>
        </FlexBox>
      )}
    </Wrapper>
  );
};

export default Navbar;
