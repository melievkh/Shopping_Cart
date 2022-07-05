import api from './api';

const productApi = {
  createOrder: (data) => api.post('/products', data),

  getAllProducts: () => api.get('/products'),
};

export default productApi;
