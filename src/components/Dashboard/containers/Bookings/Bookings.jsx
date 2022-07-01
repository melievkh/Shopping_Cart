import React from 'react';
import Heading from '../../../Heading/Heading';
import { Table, Wrapper } from './Bookings.style';

const Bookings = () => {
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
          <tr>
            <td>wfawcdc</td>
            <td>wfawcdc</td>
            <td>wfawcdc</td>
            <td>wfawcdc</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Bookings;
