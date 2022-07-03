import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import foodList from '../../components/mock/foodList';
import { Card, CardDetails, Wrapper } from '../pages_styles/pageStyle';

const Suyuq = () => {
  const dispatch = useDispatch();

  const handleIncrease = (productId, price) => {
    dispatch({ type: 'INCREMENT', payload: { productId, price } });
  };

  const handleDecrease = (productId, price) => {
    dispatch({ type: 'INCREMENT', payload: { productId, price } });
  };
  return (
    <Wrapper id="drinks">
      <Heading size="lg">Ichimliklar ro'yhati</Heading>
      <ul>
        {foodList.drinks.map((product) => {
          return (
            <li key={product.id}>
              <Card>
                <img src={product.img} alt="Loading..." />
                <CardDetails alignItems="flex-start" gap="10px">
                  <Heading size="md" margin="5px">
                    {product.name}
                  </Heading>
                  <Heading margin="5px">Narxi: {product.price} so'm</Heading>
                  {product.amount === 0 ? (
                    <Button
                      onClick={() => handleIncrease(product.id, product.price)}
                    >
                      Savatga Qo'shish
                    </Button>
                  ) : (
                    <FlexBox
                      wd="100%"
                      flexDirection="row"
                      gap="20px"
                      justifyContent="flex-end"
                    >
                      <Button
                        wd="35px"
                        hg="30px"
                        onClick={() =>
                          handleIncrease(product.id, product.price)
                        }
                      >
                        +
                      </Button>
                      <p>{product.amount}</p>
                      <Button
                        wd="35px"
                        hg="30px"
                        onClick={() =>
                          handleDecrease(product.id, product.price)
                        }
                      >
                        -
                      </Button>
                    </FlexBox>
                  )}
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
