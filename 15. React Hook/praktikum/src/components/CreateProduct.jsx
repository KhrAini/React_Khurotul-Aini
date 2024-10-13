import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Form from './form';

const EditProduct = () => {

  
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);


  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: uuidv4() };
    setProducts([...products, newProduct]);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(" yakin ingin menghapus produk ini?");
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setEditingProduct(productToEdit);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    setEditingProduct(null); 
  };

  return (
    <div className="container mx-auto">
      <Form onAddProduct={handleAddProduct} editingProduct={editingProduct} onSaveEdit={handleSaveEdit} />

      <h2 className="text-xl font-bold mt-6">Daftar Produk</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.freshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <button onClick={() => handleEdit(product.id)} className="text-white bg-blue-500 px-2 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditProduct;
