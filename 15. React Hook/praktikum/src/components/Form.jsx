import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.png'; 

const Form = ({ onAddProduct, editingProduct, onSaveEdit }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [freshness, setFreshness] = useState('');
    const [productPrice, setProductPrice] = useState('');

    useEffect(() => {
        if (editingProduct) {
            setProductName(editingProduct.productName);
            setProductCategory(editingProduct.productCategory);
            setFreshness(editingProduct.freshness);
            setProductPrice(editingProduct.productPrice);
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { productName, productCategory, freshness, productPrice };

        if (editingProduct) {
            onSaveEdit({ ...product, id: editingProduct.id });
        } else {
            onAddProduct(product);
        }

        setProductName('');
        setProductCategory('');
        setFreshness('');
        setProductPrice('');
    };

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 200) + 1; 
        console.log(randomNumber);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center my-12 w-1/2 p-4">
                <img src={logo} alt="logo" className="w-24 mx-auto mt-8" />
                <h1 className="text-[31px] font-bold mb-2">
                    {editingProduct ? "Edit Product" : "Add New Product"}
                </h1>
                <p className="text">
                    Below is an example form for managing products. Make sure all required fields are filled before submitting.
                </p>
            </div>

            <div className="w-1/3">
                <h1 className="text-[23px] font-bold">Product Details</h1>
                <form onSubmit={handleSubmit}>
                    <table className="text-[16px]">
                        <tbody>
                            <tr>
                                <td>Product Name:</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        name="productName"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        minLength={6}
                                        maxLength={50}
                                        required=""
                                        className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Product Category:</td>
                            </tr>
                            <tr>
                                <td>
                                    <select
                                        name="productCategory"
                                        value={productCategory}
                                        onChange={(e) => setProductCategory(e.target.value)}
                                        required=""
                                        className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="clothes">Clothes</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Product Condition:</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="radio"
                                        name="freshness"
                                        value="New"
                                        checked={freshness === 'New'}
                                        onChange={(e) => setFreshness(e.target.value)}
                                    />{' '}
                                    New
                                    <br />
                                    <input
                                        type="radio"
                                        name="freshness"
                                        value="Used"
                                        checked={freshness === 'Used'}
                                        onChange={(e) => setFreshness(e.target.value)}
                                    />{' '}
                                    Used
                                    <br />
                                    <input
                                        type="radio"
                                        name="freshness"
                                        value="Refurbished"
                                        checked={freshness === 'Refurbished'}
                                        onChange={(e) => setFreshness(e.target.value)}
                                    />{' '}
                                    Refurbished
                                </td>
                            </tr>
                            <tr>
                                <td>Product Price:</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        name="productPrice"
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}
                                        placeholder="$ 1"
                                        required=""
                                        className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <input
                            type="submit"
                            value={editingProduct ? "Save Changes" : "Add Product"}
                            className="text-white bg-blue-500 border rounded px-48 py-2 my-24"
                        />
                    </div>
                </form>
            </div>

            <div className='pb-10'>
                <button onClick={handleClick} className='text-white bg-purple-500 border rounded-2xl px-4 py-2 my-4'>
                    Click to get your lucky number!!
                </button>
            </div>
        </div>
    );
};

export default Form;
