import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import orderApi from '../../api/orderApi';
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from '../../store/product/actions';
import { FiShoppingCart } from 'react-icons/fi';
import {
  AmountDisplayer,
  BasketWrapper,
  ButtonsContainer,
  CardMedia,
  Cards,
  Dropdown,
  DropdownContent,
  Logo,
  OrderButton,
  ProductsList,
  Wrapper,
} from './Basket.style';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [orders, setOrders] = useState({});

  const selectedOrders = products.filter((product) => product.added === true);
  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, product: order.id };
  });
  const amount = products
    .map((p) => p.amount)
    .reduce((prev, cur) => prev + cur, 0);

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      user: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const createOrder = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Buyurtma berish uchun avval saytga kirishingiz kerak!');
      navigate('/login');
    } else {
      orderApi
        .createOrder(orders)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data));
      dispatch(getAllProducts());
    }
  };

  return (
    <Wrapper>
      <Dropdown>
        <BasketWrapper>
          <FiShoppingCart /> <Logo>Savatcha</Logo>
          <AmountDisplayer>{amount}</AmountDisplayer>
        </BasketWrapper>
        <DropdownContent>
          <ProductsList>
            {products.map(
              (product) =>
                product.added && (
                  <Cards key={product.id}>
                    <CardMedia src={product.picture} />
                    <FlexBox alignItems="flex-start">
                      <Heading>{product.name}</Heading>
                      <ButtonsContainer row justifyContent="space-evenly">
                        <Button
                          wd="35px"
                          onClick={() =>
                            dispatch(
                              decrementProductByOne(product.id, product.price)
                            )
                          }
                        >
                          -
                        </Button>
                        <Heading>{product.amount}</Heading>
                        <Button
                          wd="35px"
                          onClick={() =>
                            dispatch(
                              incrementProductByOne(product.id, product.price)
                            )
                          }
                        >
                          +
                        </Button>
                        <Heading size="sm">
                          {product.price * product.amount} so'm
                        </Heading>
                      </ButtonsContainer>
                    </FlexBox>
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
