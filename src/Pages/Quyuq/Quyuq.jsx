import React from 'react';
import Heading from '../../components/Heading/Heading';
import foodList from '../../components/mock/foodList';
import { Card, CardDetails, Wrapper } from '../styles/style';

const Quyuq = () => {
  return (
    <Wrapper id="quyuq" gap='30px'>
      <Heading size="lg">Quyuq ovqatlar ro'yhati</Heading>
      <ul>
        {foodList.quyuq.map((item) => {
          return (
            <li key={item.id}>
              <Card>
                <img src={item.img} alt="Loading..." />
                <CardDetails alignItems="flex-start" gap="10px">
                  <Heading size="md" margin="5px">
                    {item.name}
                  </Heading>
                  <Heading margin="5px">Narxi: {item.price} so'm</Heading>
                  <button>Savatga Qo'shish</button>
                </CardDetails>
              </Card>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Quyuq;
