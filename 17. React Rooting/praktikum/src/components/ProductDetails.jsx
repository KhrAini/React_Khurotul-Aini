import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Mendapatkan id dari URL
  const product = products.find((p) => p.id === id); // Cari produk berdasarkan id

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p><strong>Product Name:</strong> {product.productName}</p>
      <p><strong>Product Category:</strong> {product.productCategory}</p>
      <p><strong>Product Freshness:</strong> {product.freshness}</p>
      <p><strong>Product Price:</strong> {product.productPrice}</p>
    </div>
  );
};

export default ProductDetails;
