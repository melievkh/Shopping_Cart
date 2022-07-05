import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
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
import FlexBox from '../../components/Flexbox/FlexBox';
import orderApi from '../../api/orderApi';

const Basket = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState({});

  const selectedOrders = products.filter((product) => product.added === true);
  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, productId: order.id };
  });

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      userId: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const handleAdd = (productId, price) => {
    dispatch({ type: 'INCREMENT', payload: { productId, price } });
  };

  const handleDecrease = (productId, price) => {
    dispatch({ type: 'DECREMENT', payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId, price } });
  };

  const createOrder = (e) => {
    e.preventDefault();

    orderApi
      .createOrder(orders)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Dropdown>
      <Heading color={colors.white}>
        <FiShoppingCart /> Savatcha
      </Heading>
      <DropdownContent>
        <FlexBox flexDirection="row" justifyContent="space-evenly">
          <Heading align="end" margin="5px" style={{ fontSize: '18px' }}>
            {sum} so'm
          </Heading>
          <Button wd="140px" hg="30px" onClick={createOrder}>
            {sum === 0 ? 'Mahsulot tanlang' : 'Buyurtma berish'}
          </Button>
        </FlexBox>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.added && (
                <Cards hg="60px" wd="100%" key={product.id}>
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
      </DropdownContent>
    </Dropdown>
  );
};

export default Basket;
