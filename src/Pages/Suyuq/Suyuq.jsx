import React from 'react';
import Heading from '../../components/Heading/Heading';
import { Card, CardDetails, Wrapper } from '../styles/style';
import { useSelector, useDispatch } from 'react-redux';

const Suyuq = () => {
  const products = useSelector((state) => state.suyuq);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { productId, price } });
  };

  return (
    <Wrapper id="suyuq" flexWrap="wrap">
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
                {product.added ? (
                  <button onClick={() => handleAdd(product.id, product.price)}>
                    Savatga Qo'shish
                  </button>
                ) : (
                  <div>
                    <button>+</button>
                    <button>-</button>
                  </div>
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
