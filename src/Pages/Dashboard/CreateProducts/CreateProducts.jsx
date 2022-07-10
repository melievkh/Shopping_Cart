import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import FlexBox from '../../../components/Flexbox/FlexBox';
import Heading from '../../../components/Heading/Heading';
import Sidebar from '../Sidebar/Sidebar';
import { Box, Wrapper } from './CreateProducts.style';
import Button from '../../../components/Button/Button';

const CreateProducts = () => {
  return (
    <Wrapper>
      <Sidebar />
      <FlexBox wd="1280px" hg="100%" flexDirection="row">
        <Box wd="350px" hg="450px">
          <FlexBox flexDirection="row" gap="8px">
            <AiOutlinePlusCircle style={{ fontSize: '30px' }} />
            <Heading> Mahsuotni yaratish</Heading>
          </FlexBox>
          <input type="text" placeholder="Nomi" />
          <input type="number" placeholder="Narxi" />
          <input type="text" placeholder="Surat uchun link" />
          <textarea type="text" placeholder="Tasvir" />
          <Button wd="90%">Yaratish</Button>
        </Box>
      </FlexBox>
    </Wrapper>
  );
};

export default CreateProducts;
