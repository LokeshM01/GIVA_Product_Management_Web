// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    await axios.post('http://localhost:5000/api/products', product);
    fetchProducts();
  };

  const updateProduct = async (id, product) => {
    await axios.put(`http://localhost:5000/api/products/${id}`, product);
    fetchProducts();
    setProductToEdit(null);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container">
      <h1>Product Management System</h1>
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        productToEdit={productToEdit}
      />
      <ProductList
        products={products}
        setProductToEdit={setProductToEdit}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Home;
