import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  ButtonsBox,
  Cards,
  Dropdown,
  DropdownContent,
  Name,
  Wrapper,
} from './Basket.style';
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import orderApi from '../../api/orderApi';
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from '../../store/product/actions';

const Basket = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState({});

  const selectedOrders = products.filter((product) => product.added === true);
  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, product: order.id };
  });

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      user: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const createOrder = (e) => {
    e.preventDefault();
    orderApi
      .createOrder(orders)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
    dispatch(getAllProducts());
  };

  return (
    <Wrapper>
      <Dropdown>
        <Heading>
          <FiShoppingCart /> Savatcha
        </Heading>
        <DropdownContent>
          {sum === 0 ? (
            <Heading>Mahsulotni tanlang!</Heading>
          ) : (
            <FlexBox flexDirection="row" justifyContent="space-evenly">
              <Heading align="end" margin="5px" style={{ fontSize: '18px' }}>
                {sum} so'm
              </Heading>
              <Button wd="140px" hg="30px" onClick={createOrder}>
                Buyurtma bering
              </Button>
            </FlexBox>
          )}
          {products.map((product) => (
            <li key={product.id}>
              {product.added && (
                <Cards hg="65px" wd="100%">
                  <Name flexDirection="row" justifyContent="space-around">
                    <Heading style={{ fontSize: '22px' }}>
                      {product.name}
                    </Heading>
                  </Name>
                  <ButtonsBox justifyContent="space-evenly" flexDirection="row">
                    <Button
                      wd="35px"
                      hg="30px"
                      onClick={() =>
                        dispatch(
                          incrementProductByOne(product.id, product.price)
                        )
                      }
                    >
                      +
                    </Button>
                    <Heading>{product.amount}</Heading>
                    <Button
                      wd="35px"
                      hg="30px"
                      onClick={() =>
                        dispatch(
                          decrementProductByOne(product.id, product.price)
                        )
                      }
                    >
                      -
                    </Button>
                    <Heading>{product.price} so'm</Heading>
                  </ButtonsBox>
                </Cards>
              )}
              <hr />
            </li>
          ))}
        </DropdownContent>
      </Dropdown>
    </Wrapper>
  );
};

export default Basket;
