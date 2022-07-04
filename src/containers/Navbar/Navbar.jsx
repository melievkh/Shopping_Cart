import React from 'react';
import Wrapper from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';
import { FiLogIn, FiSearch, FiUserPlus } from 'react-icons/fi';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/button/Button';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

const Navbar = () => {
  // const products = useSelector((state) => state.products);

  // const keys = products.name;

  // const [query, setQuery] = useState('');

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

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
          <input
            type="search"
            placeholder="search for foods, drinks..."
            // onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <Button
            wd="30px"
            hg="30px"
            bgColor={colors.grey}
            style={{ color: colors.black, borderRadius: '0 8px 8px 0' }}
            // onClick={() => search(products)}
          >
            <FiSearch />
          </Button>
        </FlexBox>

        <Link to="/login" style={{ color: colors.white }}>
          <FiLogIn /> Kirish
        </Link>
        <Link to="/login" style={{ color: colors.white }}>
          <FiUserPlus /> Ro'yhatdan o'tish
        </Link>
      </FlexBox>
    </Wrapper>
  );
};

export default Navbar;
