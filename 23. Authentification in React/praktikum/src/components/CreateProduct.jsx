import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Form from './Form';
import useStore from '../store/useStore';
import axios from 'axios';

const CreateProduct = () => {
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);
  const editProduct = useStore((state) => state.editProduct);

  const [editingProduct, setEditingProduct] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [productList, setProductList] = useState([]); // Inisialisasi dengan array kosong

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6718b2617fc4c5ff8f4a9e83.mockapi.io/productList");
      console.log("Response dari API:", response.data);
      setProductList(response.data); 
    } catch (error) {
      console.error("Error dari axios:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: uuidv4(), image: productImage };
    addProduct(newProduct);
    setProductImage(null);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      deleteProduct(id);
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  const handleSaveEdit = (updatedProduct) => {
    editProduct(updatedProduct);
    setEditingProduct(null);
  };

  const handleImageChange = (file) => {
    if (file) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Form 
        onAddProduct={handleAddProduct}
        editingProduct={editingProduct}
        onSaveEdit={handleSaveEdit}
        onImageChange={handleImageChange}
      />

      <h2 className="text-[23px] font-bold">Product List</h2>
      <table className="min-w-full bg-white border-collapse border border-gray-400 my-4">
        <thead>
          <tr>
            {["No", "Nama Produk", "Kategori Produk", "Kualitas Produk", "Harga Produk", "Gambar Produk", "Aksi"].map((header) => (
              <th key={header} className="border border-gray-300 p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => ( 
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">
                <Link to={`/product/${product.id}`} className="text-blue-500 underline">
                  {product.productName}
                </Link>
              </td>
              <td className="border border-gray-300 p-2">{product.productCategory}</td>
              <td className="border border-gray-300 p-2">{product.freshness}</td>
              <td className="border border-gray-300 p-2">{product.productPrice}</td>
              <td className="border border-gray-300 p-2">
                {product.image && (
                  <img src={product.image} alt={product.productName} className="w-16 h-16 object-cover" />
                )}
              </td>
              <td className="border border-gray-300 p-2">
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

export default CreateProduct;
