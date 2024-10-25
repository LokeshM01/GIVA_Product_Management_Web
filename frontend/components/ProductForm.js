// components/ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, updateProduct, productToEdit }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setProduct({
        name: '',
        description: '',
        price: '',
        quantity: '',
      });
    }
  }, [productToEdit]);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      updateProduct(productToEdit.id, product);
    } else {
      addProduct(product);
    }
    setProduct({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{productToEdit ? 'Edit Product' : 'Add Product'}</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={product.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={product.description}
          onChange={onChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          name="price"
          value={product.price}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          name="quantity"
          value={product.quantity}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {productToEdit ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
