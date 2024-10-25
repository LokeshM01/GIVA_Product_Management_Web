// components/ProductList.js
import React from 'react';

const ProductList = ({ products, setProductToEdit, deleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${parseFloat(product.price).toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setProductToEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
