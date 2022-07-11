import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  ButtonsContainer,
  Cards,
  Dropdown,
  DropdownContent,
  OrderButton,
  ProductsList,
  Wrapper,
} from './Basket.style';
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
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
          <ProductsList>
            {products.map(
              (product) =>
                product.added && (
                  <Cards key={product.id}>
                    <Heading align="start">{product.name}</Heading>
                    <ButtonsContainer row justifyContent="space-evenly">
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
                    </ButtonsContainer>
                    <hr />
                  </Cards>
                )
            )}
          </ProductsList>
          <OrderButton>
            {sum === 0 ? (
              <Heading>Mahsulotni tanlang!</Heading>
            ) : (
              <Button justifyContent="space-evenly" onClick={createOrder}>
                Buyurtma <Heading>{sum} so'm</Heading>
              </Button>
            )}
          </OrderButton>
        </DropdownContent>
      </Dropdown>
    </Wrapper>
  );
};

export default Basket;
