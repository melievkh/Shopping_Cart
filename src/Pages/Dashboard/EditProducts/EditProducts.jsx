import React, { useEffect } from 'react';
import Heading from '../../../components/Heading/Heading';
import { getAllProducts } from '../../../store/product/actions';
import { Table, Wrapper } from './EditProducts.style';
import { useSelector, useDispatch } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Modal from '../../../components/Modal/Modal';
import useToggle from '../../../hooks/useToggle';
import Edit from '../../../modal/Edit/Edit';
import { useState } from 'react';
import Button from '../../../components/Button/Button';

const Products = () => {
  const dispatch = useDispatch();
  const modal = useToggle();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleEdit = (prod) => {
    setProduct(prod);
    modal.open();
  };

  const handleRemove = (product) => {};

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
            <th>T/O'</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                <Button wd="40px" onClick={() => handleEdit(product)}>
                  <BiEditAlt />
                </Button>
                <Button wd="40px" onClick={() => handleRemove(product.id)}>
                  <MdOutlineDeleteOutline />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <Edit product={product} modal={modal} />
      </Modal>
    </Wrapper>
  );
};

export default Products;
