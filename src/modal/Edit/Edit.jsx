import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';
import { Form } from './Edit.style';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/product/actions';
import productApi from '../../api/productApi';

const Edit = ({ product, modal }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.editProduct(product.id, values).then((res) => {
      dispatch(getAllProducts());
      modal.close();
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form key={product.id} onSubmit={handleSubmit}>
      <FlexBox row gap="4px">
        <FaEdit /> <Heading>Tahrirlash</Heading>
      </FlexBox>
      <Input
        type="text"
        placeholder="Nomi"
        name="name"
        defaultValue={product.name}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Narxi"
        name="price"
        defaultValue={product.price}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Surat uchun link"
        name="picture"
        defaultValue={product.picture}
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Tasvir"
        name="description"
        defaultValue={product.description}
        onChange={handleChange}
      />
      <Button type="submit">Tahrirlash</Button>
    </Form>
  );
};

export default Edit;
