import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import FlexBox from '../../components/Flexbox/FlexBox';
import { ButtonsBox, Dropdown, DropdownContent, Name } from './Basket.style';
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/button/Button';
import colors from '../../assets/color/colors';

const Basket = () => {
  const products = useSelector((state) => state.liquidFood);
  // const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId, price } });
  };
  return (
    <Dropdown>
      <Heading color={colors.white}>
        <FiShoppingCart /> Savatcha
      </Heading>
      {products?.map((product) => (
        <DropdownContent key={product.id}>
          {product.amount === 0 ? (
            <Heading size="sm">Savatcha hozircha bo'sh!</Heading>
          ) : (
            <FlexBox hg="100px" wd="100%" bgColor={colors.grey}>
              <Name flexDirection="row" justifyContent="space-around">
                <p>{product.name}</p>
                <Button wd="40px" hg="40px">
                  <MdDelete />
                </Button>
              </Name>
              <ButtonsBox
                justifyContent="flex-start"
                flexDirection="row"
                gap="10px"
              >
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
              </ButtonsBox>
            </FlexBox>
          )}
        </DropdownContent>
      ))}
    </Dropdown>
  );
};

export default Basket;
