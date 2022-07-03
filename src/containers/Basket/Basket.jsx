import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import FlexBox from '../../components/Flexbox/FlexBox';
import {
  ButtonsBox,
  Cards,
  Dropdown,
  DropdownContent,
  Name,
} from './Basket.style';
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/button/Button';
import colors from '../../assets/color/colors';

const Basket = () => {
  const products = useSelector((state) => state.liquidFood);
  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: 'INCREMENT', payload: { productId, price } });
  };

  const handleDecrease = (productId, price) => {
    dispatch({ type: 'DECREMENT', payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId, price } });
  };
  return (
    <Dropdown>
      <Heading color={colors.white}>
        <FiShoppingCart /> Savatcha
      </Heading>
      <DropdownContent>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.added && (
                <Cards hg="60px" wd="100%">
                  <Name flexDirection="row" justifyContent="space-around">
                    <Heading color={colors.white} style={{ fontSize: '16px' }}>
                      {product.name}
                    </Heading>
                    <Button
                      wd="30px"
                      hg="30px"
                      onClick={() => handleRemove(product.id, product.price)}
                    >
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
                      onClick={() => handleDecrease(product.id, product.price)}
                    >
                      -
                    </Button>
                  </ButtonsBox>
                </Cards>
              )}
            </li>
          ))}
        </ul>
        <Heading color={colors.black} align='end' margin='5px' style={{fontSize: '18px'}}> Umumiy - {sum} so'm</Heading>
      </DropdownContent>
    </Dropdown>
  );
};

export default Basket;
