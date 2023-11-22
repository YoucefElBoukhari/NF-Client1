import axios from "axios";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// const 'https://stock-managment-backend-production.up.railway.app/api/products/' = `https://stock-managment-backend-production.up.railway.app/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(
    "https://stock-managment.onrender.com/api/products/",
    formData
  );
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(
    "https://stock-managment.onrender.com/api/products/"
  );
  return response.data;
};

// Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(
    "https://stock-managment.onrender.com/api/products/" + id
  );
  return response.data;
};
// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(
    "https://stock-managment.onrender.com/api/products/" + id
  );
  return response.data;
};
// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(
    `${"https://stock-managment.onrender.com/api/products/"}${id}`,
    formData
  );
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
