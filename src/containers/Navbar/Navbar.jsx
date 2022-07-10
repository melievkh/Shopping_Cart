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
    <Wrapper style={{ position: 'fixed' }}>
      <Basket />
      <FlexBox
        wd="60%"
        flexDirection="row"
        gap="30px"
        justifyContent="flex-end"
      >
        <FlexBox wd="330px" hg="30px" flexDirection="row">
          <input type="search" placeholder="search for foods, drinks..." />
          <Button
            wd="30px"
            hg="30px"
            bgColor={colors.grey}
            style={{ color: colors.black, borderRadius: '0 8px 8px 0' }}
          >
            <FiSearch />
          </Button>
        </FlexBox>
        {isLoggedIn ? (
          <Dropdown>
            <TbUserCircle style={{ color: colors.white, fontSize: '30px' }} />
            <DropdownContent>
              <Button hg="35px" onClick={() => logout()}>
                chiqish
              </Button>
            </DropdownContent>
            <Heading color={colors.white}>{username}</Heading>
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
      </FlexBox>
    </Wrapper>
  );
};

export default Navbar;
