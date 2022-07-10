import React, { useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FlexBox from '../../../components/Flexbox/FlexBox';
import Heading from '../../../components/Heading/Heading';
import { getAllProducts } from '../../../store/product/actions';
import Sidebar from '../Sidebar/Sidebar';
import { Table, Wrapper } from './ExistProducts.style';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import useToggle from '../../../hooks/useToggle';

const ExistProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modal = useToggle();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.product.products);

  return (
    <Wrapper>
      <Sidebar />
      <FlexBox wd="900px" flexDirection="column">
        <Heading margin="30px">Buyurtmalar ro'yxati</Heading>
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
        <Modal isOpen={modal.isOpen} onClose={modal.close}>
          This is children
        </Modal>
        <Button
          wd="180px"
          hg="30px"
          style={{ marginLeft: '620px' }}
          onClick={() => navigate('/create')}
        >
          Mahsulot qo'shish
          <AiOutlinePlusCircle style={{ fontSize: '25px' }} />
        </Button>
      </FlexBox>
    </Wrapper>
  );
};

export default ExistProducts;
