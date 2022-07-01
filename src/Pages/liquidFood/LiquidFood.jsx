import React from 'react';
import Heading from '../../components/Heading/Heading';
import { Card, CardDetails, Wrapper } from '../pages_styles/pageStyle';
import { useSelector, useDispatch } from 'react-redux';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/button/Button';

const Suyuq = () => {
  const products = useSelector((state) => state.liquidFood);

  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId, price } });
  };
  return (
    <Wrapper id="suyuq">
      <Heading size="lg">Suyuq ovqatlar ro'yhati</Heading>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Card>
              <img src={product.img} alt="Loading..." />
              <CardDetails alignItems="flex-start" gap="10px">
                <Heading size="md" margin="5px">
                  {product.name}
                </Heading>
                <Heading margin="5px">Narxi: {product.price} so'm</Heading>
                {product.amount === 0 ? (
                  <Button onClick={() => handleAdd(product.id, product.price)}>
                    Savatga Qo'shish
                  </Button>
                ) : (
                  <FlexBox wd="100%" flexDirection="row" gap="30px">
                    <Button
                      wd="35px"
                      hg="30px"
                      onClick={() => handleAdd(product.id, product.price)}
                    >
                      +
                    </Button>
                    <p>{product.amount}</p>
                    <Button
                      wd="35px"
                      hg="30px"
                      onClick={() => handleRemove(product.id, product.price)}
                    >
                      -
                    </Button>
                    <p>{sum}</p>
                  </FlexBox>
                )}
              </CardDetails>
            </Card>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Suyuq;
