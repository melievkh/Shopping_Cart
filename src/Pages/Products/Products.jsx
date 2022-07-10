import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardDetails, Wrapper } from './Products.style';
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
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Card>
              <img src={product.picture} alt="Loading..." />
              <CardDetails alignItems="flex-start" gap="10px">
                <Heading size="md" margin="5px">
                  {product.name}
                </Heading>
                <FlexBox wd='100%' flexDirection="row" justifyContent='space-evenly'>
                  <Heading size="sm" margin="5px">
                    {product.price} so'm
                  </Heading>
                  {product.amount === 0 ? (
                    <Button
                      wd="120px" hg='35px'
                      onClick={() =>
                        dispatch(
                          incrementProductByOne(product.id, product.price)
                        )
                      }
                    >
                      Qo'shish
                    </Button>
                  ) : (
                    <FlexBox
                      flexDirection="row"
                      gap="20px"
                      justifyContent="flex-end"
                    >
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
                </FlexBox>
              </CardDetails>
            </Card>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Products;
