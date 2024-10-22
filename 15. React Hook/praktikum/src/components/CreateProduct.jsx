import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Form from './Form';

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Menambahkan produk baru
  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: uuidv4() };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Menghapus produk
  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus produk ini?");
    if (confirmDelete) {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    }
  };

  // Mengedit produk
  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  // Menyimpan hasil edit produk
  const handleSaveEditedProduct = (updatedProduct) => {
    setProducts((prevProducts) => 
      prevProducts.map((product) => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  return (
    <div className="container mx-auto">
      {/* Form untuk menambahkan/mengedit produk */}
      <Form 
        onAddProduct={handleAddProduct} 
        editingProduct={editingProduct} 
        onSaveEdit={handleSaveEditedProduct} 
      />

      {/* Tabel daftar produk */}
      <h2 className="text-xl font-bold mt-6">Daftar Produk</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Kategori Produk</th>
            <th>Kondisi Produk</th>
            <th>Harga Produk</th>
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
                <button 
                  onClick={() => handleEditProduct(product.id)} 
                  className="text-white bg-blue-500 px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteProduct(product.id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
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

export default EditProduct;
