import React, { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { AiOutlineDoubleRight, AiOutlinePlusCircle } from 'react-icons/ai';
import { SidebarToggler, StyledLink, Wrapper } from './Sidebar.style';
import colors from '../../../assets/color/colors';
import Heading from '../../../components/Heading/Heading';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDoubleRight />
      </SidebarToggler>
      {isOpen ? (
        <Heading margin="10px" color={colors.white}>
          Admin
        </Heading>
      ) : (
        <Heading margin="10px" color={colors.white}>
          A
        </Heading>
      )}
      <StyledLink to="/admin/candidates">
        <BsBasket />
        {isOpen && (
          <Heading color={colors.white} style={{ fontSize: '18px' }}>
            Buyurtmalar
          </Heading>
        )}
      </StyledLink>
      <StyledLink to="/admin/contacts">
        <AiOutlinePlusCircle />
        {isOpen && (
          <Heading color={colors.white} style={{ fontSize: '18px' }}>
            Mahsulot qo'shish
          </Heading>
        )}
      </StyledLink>
    </Wrapper>
  );
};
export default Sidebar;
