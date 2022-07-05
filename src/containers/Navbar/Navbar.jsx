import React from 'react';
import Wrapper from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';
import { FiLogIn, FiSearch, FiUserPlus } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/button/Button';
import { useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);

  return (
    <Wrapper style={{ position: 'fixed' }}>
      <Basket />
      <FlexBox
        wd="70%"
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
          <FlexBox flexDirection="row">
            <TbUserCircle style={{ color: colors.white, fontSize: '30px' }} />
            <Heading color={colors.white}>{username}</Heading>
          </FlexBox>
        ) : (
          <FlexBox flexDirection="row">
            <Link to="/login" style={{ color: colors.white }}>
              <FiLogIn /> Kirish
            </Link>
            <Link to="/register" style={{ color: colors.white }}>
              <FiUserPlus /> Ro'yhatdan o'tish
            </Link>
          </FlexBox>
        )}
      </FlexBox>
    </Wrapper>
  );
};

export default Navbar;
