import React, { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { AiOutlineDoubleLeft, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { SidebarToggler, StyledLink, Wrapper } from './Sidebar.style';
import colors from '../../../assets/color/colors';
import Heading from '../../../components/Heading/Heading';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDoubleLeft />
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
      <StyledLink to="/admin">
        <BsBasket />
        {isOpen && (
          <Heading color={colors.white} style={{ fontSize: '18px' }}>
            Buyurtmalar
          </Heading>
        )}
      </StyledLink>
      <StyledLink to="/existprods">
        <MdProductionQuantityLimits />
        {isOpen && (
          <Heading color={colors.white} style={{ fontSize: '18px' }}>
            Mahsulotlar
          </Heading>
        )}
      </StyledLink>
      <StyledLink to="/create">
        <AiOutlinePlusCircle />
        {isOpen && (
          <Heading color={colors.white} style={{ fontSize: '18px' }}>
            Qo'shish
          </Heading>
        )}
      </StyledLink>
    </Wrapper>
  );
};
export default Sidebar;
