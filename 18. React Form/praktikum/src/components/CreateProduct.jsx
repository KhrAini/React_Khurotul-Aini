import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Form from './Form';

const CreateProduct = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: uuidv4(), image: productImage };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setProductImage(null); 
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setEditingProduct(productToEdit);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts((prevProducts) => 
      prevProducts.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    setEditingProduct(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!isValidImage(file)) return; 
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
    }
  };

  const isValidImage = (file) => {
    const validImageTypes = ['image/jpeg', 'image/png'];
    if (!validImageTypes.includes(file.type)) {
      alert('Format gambar harus JPG atau PNG.');
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran gambar tidak boleh lebih dari 2MB.');
      return false;
    }
    return true;
  };

  return (
    <div className="container mx-auto">
      <Form 
        onAddProduct={handleAddProduct} 
        editingProduct={editingProduct} 
        onSaveEdit={handleSaveEdit} 
        onImageChange={handleImageChange}
      />

      <h2 className="text-xl font-bold mt-6">Daftar Produk</h2>
      <ProductTable 
        products={products} 
        onEdit={handleEditProduct} 
        onDelete={handleDeleteProduct} 
      />
    </div>
  );
};

const ProductTable = ({ products, onEdit, onDelete }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th>No</th>
        <th>ID Produk</th>
        <th>Nama Produk</th>
        <th>Kategori Produk</th>
        <th>Kualitas Produk</th>
        <th>Harga Produk</th>
        <th>Gambar Produk</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td>{product.id}</td> 
          <td>
            <Link to={`/product/${product.id}`} className="text-blue-500 underline">
              {product.productName}
            </Link>
          </td>
          <td>{product.productCategory}</td>
          <td>{product.freshness}</td>
          <td>{product.productPrice}</td>
          <td>
            {product.image && <img src={product.image} alt={product.productName} className="w-16 h-16 object-cover" />}
          </td>
          <td>
            <button onClick={() => onEdit(product.id)} className="text-white bg-blue-500 px-2 py-1 rounded">Edit</button>
            <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CreateProduct;
