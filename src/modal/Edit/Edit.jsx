import React, { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';
import { Form } from './Edit.style';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../store/product/actions';

const Edit = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(editTodo());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo());
  };

  return (
    <div>
      {products.map((product) => (
        <Form key={product.id} onSubmit={handleSubmit}>
          <FlexBox row gap="4px">
            <FaEdit /> <Heading>Tahrirlash</Heading>
          </FlexBox>
          <Input type="text" placeholder="Nomi" defaultValue={product.name} />
          <Input
            type="number"
            placeholder="Narxi"
            defaultValue={product.price}
          />
          <Input
            type="text"
            placeholder="Surat uchun link"
            defaultValue={product.picture}
          />
          <textarea
            type="text"
            placeholder="Tasvir"
            defaultValue={product.description}
          />
          <Button type="submit">Tahrirlash</Button>
        </Form>
      ))}
    </div>
  );
};

export default Edit;
