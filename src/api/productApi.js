import api from './api';

const productApi = {
  createOrder: (data) => api.post('/products', data),

  getAllProducts: () => api.get('/products'),

  editProduct: (id, data) => api.put(`/products/${id}`, data),
};

export default productApi;
