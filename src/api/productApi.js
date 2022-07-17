import api from './api';

const productApi = {
  getAllProducts: () => api.get('/products'),

  editProduct: (id, data) => api.put(`/products/${id}`, data),

  creteProduct: (id, data) => api.post(`/products`),
};

export default productApi;
