// import products from '../../mock/products';

const initialState = {
  products: [],
  sum: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.map((product) => {
          return { ...product, id: product._id, amount: 0, added: false };
        }),
      };
    case 'INCREMENT':
      return {
        products: state.products.map((product) => {
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

    case 'DECREMENT':
      return {
        products: state.products.map((product) => {
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

    case 'REMOVE_FROM_BASKET':
      return {
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              amount: 0,
              added: false,
            };
          }
          return product;
        }),

        // sum: state.sum - action.payload.price,
      };
    default:
      return state;
  }
};

export default productReducer;
