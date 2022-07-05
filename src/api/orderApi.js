import api from './api';

const orderApi = {
  createOrder: (data) => api.post('/orders', data),
};

export default orderApi;
