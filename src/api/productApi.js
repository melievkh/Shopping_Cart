import api from './api';

const productApi = {
  createOrder: (data) => api.post('/products', data),

  getAllProducts: () => api.get('/products'),

  editProducts: () => api.put('/products')
};

export default productApi;
