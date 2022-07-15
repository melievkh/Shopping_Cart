import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Heading from '../../components/Heading/Heading';
import { Form } from './CreateProducts.style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import productApi from '../../api/productApi';
import { getAllProducts } from '../../store/product/actions';

const CreateProducts = ({ product, modal }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.creteProduct(product.id, values).then((res) => {
      dispatch(getAllProducts());
      modal.close();
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FlexBox row gap="4px">
        <AiOutlinePlusCircle /> <Heading>Mahsulotni yaratish</Heading>
      </FlexBox>
      <Input
        type="text"
        placeholder="Nomi"
        name="name"
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Narxi"
        name="price"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Surat uchun link"
        name="picture"
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Tasvir"
        name="description"
        onChange={handleChange}
      />
      <Button type="submit">Yaratish</Button>
    </Form>
  );
};

export default CreateProducts;
