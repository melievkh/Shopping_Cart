import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Heading from '../../components/Heading/Heading';
import { Form } from './CreateProducts.style';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';

const CreateProducts = () => {
  return (
    <Form>
      <FlexBox row gap='4px'>
        <AiOutlinePlusCircle /> <Heading>Mahsuotni yaratish</Heading>
      </FlexBox>
      <Input type="text" placeholder="Nomi" />
      <Input type="number" placeholder="Narxi" />
      <Input type="text" placeholder="Surat uchun link" />
      <textarea type="text" placeholder="Tasvir" />
      <Button>Yaratish</Button>
    </Form>
  );
};

export default CreateProducts;
