import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    const products = savedProducts ? JSON.parse(savedProducts) : [];
    const foundProduct = products.find((p) => p.id === id); 

    console.log('Saved products:', products);
    console.log('Found product:', foundProduct); 
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <img 
        src={product.productImage}
        alt={product.productName} 
        className="w-1/2 h-auto mb-4" 
      />
      <ProductInfo label="Product Name" value={product.productName} />
      <ProductInfo label="Product Category" value={product.productCategory} />
      <ProductInfo label="Product Freshness" value={product.freshness} />
      <ProductInfo label="Product Price" value={product.productPrice} />
    </div>
  );
};

const ProductInfo = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

export default ProductDetails;
