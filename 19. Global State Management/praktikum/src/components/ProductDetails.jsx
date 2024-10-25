import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/useStore';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useStore((state) => state.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <img 
        src={product.image} 
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
