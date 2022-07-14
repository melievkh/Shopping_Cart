import React, { useEffect } from 'react';
import Heading from '../../../components/Heading/Heading';
import { getAllProducts } from '../../../store/product/actions';
import { Table, Wrapper } from './EditProducts.style';
import { useSelector, useDispatch } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import Modal from '../../../components/Modal/Modal';
import useToggle from '../../../hooks/useToggle';
import Edit from '../../../modal/Edit/Edit';

const Products = () => {
  const dispatch = useDispatch();
  const modal = useToggle();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.product.products);

  return (
    <Wrapper gap="8px">
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
                <button onClick={modal.open}>
                  <BiEditAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <Edit />
      </Modal>
    </Wrapper>
  );
};

export default Products;
