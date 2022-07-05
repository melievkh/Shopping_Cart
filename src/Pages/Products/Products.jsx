import React, { useEffect } from 'react';
import Heading from '../../components/Heading/Heading';
import { Card, CardDetails, Wrapper } from '../pages_styles/pageStyle';
import { useSelector, useDispatch } from 'react-redux';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/button/Button';
import { getAllProducts } from '../../store/actions/productAction';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleAdd = (productId, price) => {
    dispatch({ type: 'INCREMENT', payload: { productId, price } });
  };

  const handleDecrease = (productId, price) => {
    dispatch({ type: 'DECREMENT', payload: { productId, price } });
  };

  return (
    <Wrapper>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Card>
              <img src={product.picture} alt="Loading..." />
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
                  <FlexBox
                    wd="100%"
                    flexDirection="row"
                    gap="20px"
                    justifyContent="flex-end"
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

export default Products;
