import React, { useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Button from '../../../components/Button/Button';
import FlexBox from '../../../components/Flexbox/FlexBox';
import Heading from '../../../components/Heading/Heading';
import { getAllProducts } from '../../../store/product/actions';
import { Table } from './EditProducts.style';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import useToggle from '../../../hooks/useToggle';
import CreateProducts from '../../../modal/CreateProducts/CreateProducts';

const Products = () => {
  const dispatch = useDispatch();
  const modal = useToggle();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.product.products);

  return (
    <FlexBox wd="900px" gap="8px">
      <Heading margin="30px">Mahsulotlar ro'yxati</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Ma'lumotlar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={modal.open}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button wd="190px" style={{ marginLeft: '620px' }} onClick={modal.open}>
        Mahsulot qo'shish
        <AiOutlinePlusCircle style={{ fontSize: '25px' }} />
      </Button>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <CreateProducts />
      </Modal>
    </FlexBox>
  );
};

export default Products;
