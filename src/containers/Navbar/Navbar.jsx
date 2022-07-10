import React from 'react';
import { Dropdown, DropdownContent, Wrapper } from './Navbar.style';
import Basket from '../Basket/Basket';
import { useSelector } from 'react-redux';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { Input } from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import useToggle from '../../hooks/useToggle';
import Login from '../../Pages/Login/Login';

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const modal = useToggle();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
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
        <FlexBox flexDirection="row" gap="10px">
          <Dropdown>
            <TbUserCircle style={{ fontSize: '30px', cursor: 'pointer' }} />
            <DropdownContent>
              <Button onClick={() => logout()}>chiqish</Button>
            </DropdownContent>
          </Dropdown>
          <Heading>{username}</Heading>
        </FlexBox>
      ) : (
        <Button wd="160px" onClick={modal.open}>
          <FiLogIn /> Kirish
        </Button>
      )}
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <Login />
      </Modal>
    </Wrapper>
  );
};

export default Navbar;
