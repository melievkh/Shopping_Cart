import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Heading from '../../components/Heading/Heading';
import { Form } from './CreateProducts.style';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

const CreateProducts = () => {
  return (
    <Form>
      <Heading>
        <AiOutlinePlusCircle /> Mahsuotni yaratish
      </Heading>
      <Input type="text" placeholder="Nomi" />
      <Input type="number" placeholder="Narxi" />
      <Input type="text" placeholder="Surat uchun link" />
      <textarea type="text" placeholder="Tasvir" />
      <Button>Yaratish</Button>
    </Form>
  );
};

export default CreateProducts;
