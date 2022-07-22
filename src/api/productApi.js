import api from "./api";

const productApi = {
  createProduct: (data) => api.post("/products", data),

  getAllProducts: () => api.get("/products"),
};

export default productApi;
