import foodList from '../../components/mock/foodList';

const suyuq = foodList.suyuq;

const initialState = {
  suyuq,
  sum: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        suyuq: state.suyuq.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              amount: product.amount + 1,
              added: true,
            };
          }
          return product;
        }),
        sum: state.sum + action.payload.price,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        suyuq: state.suyuq.map((product) => {
          if (product.id === action.payload.productId) {
            if (product.amount === 1) {
              return { ...product, amount: 0, added: false };
            }

            return {
              ...product,
              amount: product.amount - 1,
            };
          }
          return product;
        }),
        sum: state.sum - action.payload.price,
      };
    default:
      return state;
  }
};
