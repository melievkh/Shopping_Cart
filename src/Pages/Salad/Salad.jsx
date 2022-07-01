import React from 'react';
import Button from '../../components/button/Button';
import Heading from '../../components/Heading/Heading';
import foodList from '../../components/mock/foodList';
import { Card, CardDetails, Wrapper } from '../pages_styles/pageStyle';

const Suyuq = () => {
  return (
    <Wrapper id="salat">
      <Heading size="lg">Salatlar ro'yhati</Heading>
      <ul>
        {foodList.salads.map((item) => {
          return (
            <li key={item.id}>
              <Card>
                <img src={item.img} alt="Loading..." />
                <CardDetails alignItems="flex-start" gap="10px">
                  <Heading size="md" margin="5px">
                    {item.name}
                  </Heading>
                  <Heading margin="5px">Narxi: {item.price} so'm</Heading>
                  <Button>Savatga Qo'shish</Button>
                </CardDetails>
              </Card>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Suyuq;
