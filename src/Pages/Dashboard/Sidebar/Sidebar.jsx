import React, { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { AiOutlineDoubleLeft, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { SidebarToggler, StyledLink, Wrapper } from './Sidebar.style';
import Heading from '../../../components/Heading/Heading';
import useToggle from '../../../hooks/useToggle';
import Modal from '../../../components/Modal/Modal';
import FlexBox from '../../../components/Flexbox/FlexBox';
import CreateProducts from '../../../forms/CreateProducts/CreateProducts'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useToggle();

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDoubleLeft />
      </SidebarToggler>
      {isOpen ? (
        <Heading size="md" margin="10px">
          Admin
        </Heading>
      ) : (
        <Heading secondary size="md">
          A
        </Heading>
      )}
      <StyledLink to="/admin">
        <BsBasket />
        {isOpen && <Heading secondary>Buyurtmalar</Heading>}
      </StyledLink>
      <StyledLink to="/admin/edit-products">
        <MdProductionQuantityLimits />
        {isOpen && <Heading secondary>Mahsulotlar</Heading>}
      </StyledLink>
      <FlexBox
        row
        justifyContent="flex-start"
        gap="8px"
        style={{ cursor: 'pointer' }}
        onClick={modal.open}
      >
        <AiOutlinePlusCircle />
        {isOpen && <Heading secondary>Qo'shish</Heading>}
      </FlexBox>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <CreateProducts />
      </Modal>
    </Wrapper>
  );
};
export default Sidebar;
