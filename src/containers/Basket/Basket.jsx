import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import FlexBox from '../../components/Flexbox/FlexBox';
import { ButtonsBox, Dropdown, DropdownContent, Name } from './Basket.style';
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading';

const Basket = () => {
  const products = useSelector((state) => state.suyuq);
  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId, price } });
  };
  return (
    <Dropdown>
      <FiShoppingCart /> Savatcha
      {products?.map((prod) => (
        <DropdownContent key={prod.id}>
          {prod.added ? (
            <Heading size="sm" style={{ color: '#b04444' }}>
              Savatcha hozircha bo'sh!
            </Heading>
          ) : (
            <FlexBox height="100px" width="100%">
              <Name flexDirection="row" justifyContent="space-around">
                <p>{prod.name}</p>
                <button>
                  <MdDelete />
                </button>
              </Name>
              <ButtonsBox
                justifyContent="flex-start"
                flexDirection="row"
                gap="10px"
              >
                <button onClick={() => handleAdd(prod.id, prod.price)}>
                  +
                </button>
                <p>{prod.amount}</p>
                <button onClick={() => handleRemove(prod.id, prod.price)}>
                  -
                </button>
                <p style={{ marginLeft: '60px' }}>{prod.price}</p>
              </ButtonsBox>
            </FlexBox>
          )}
        </DropdownContent>
      ))}
    </Dropdown>
  );
};

export default Basket;
