import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import orderApi from '../../../../api/orderApi';
import Heading from '../../../Heading/Heading';
import { Table, Wrapper } from './Order.style';

const Order = () => {
  // const products = useSelector((state) => state.product.products);

  const [prods, setProds] = useState();

  useEffect(() => {
    orderApi
      .get('/orders')
      .then((res) => setProds(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(prods);
  return (
    <Wrapper>
      <Heading margin="30px"> Buyurtmalar ro'yxati</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {prods?.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.amount}</td>
              <td>{product.amount}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Order;
