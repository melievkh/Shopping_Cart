import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardDetails, CardMedia, Wrapper } from './Products.style';
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from '../../store/product/actions';
import Heading from '../../components/Heading/Heading';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/Button/Button';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper>
      {products?.map((product) => (
        <Card key={product.id}>
          <CardMedia src={product.picture} alt="Loading..." />
          <CardDetails>
            <Heading size="md">{product.name}</Heading>

            <Heading size="sm">{product.price} so'm</Heading>
            {product.amount === 0 ? (
              <Button
                wd="120px"
                hg="35px"
                onClick={() =>
                  dispatch(incrementProductByOne(product.id, product.price))
                }
              >
                Qo'shish
              </Button>
            ) : (
              <FlexBox flexDirection="row" gap="20px" justifyContent="flex-end">
                <Button
                  wd="35px"
                  hg="30px"
                  onClick={() =>
                    dispatch(incrementProductByOne(product.id, product.price))
                  }
                >
                  +
                </Button>
                <p>{product.amount}</p>
                <Button
                  wd="35px"
                  hg="30px"
                  onClick={() =>
                    decrementProductByOne(product.id, product.price)
                  }
                >
                  -
                </Button>
              </FlexBox>
            )}
          </CardDetails>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Products;
