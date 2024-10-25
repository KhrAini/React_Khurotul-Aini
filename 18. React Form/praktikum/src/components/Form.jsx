import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.png';

const Form = ({ onAddProduct, editingProduct, onSaveEdit }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [freshness, setFreshness] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    useEffect(() => {
        if (editingProduct) {
            setProductName(editingProduct.productName);
            setProductCategory(editingProduct.productCategory);
            setFreshness(editingProduct.freshness);
            setProductPrice(editingProduct.productPrice);
            setProductImage(editingProduct.image);
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isFormValid()) return; 

        const reader = new FileReader();
        reader.onloadend = () => {
            const product = createProductObject(reader.result);
            editingProduct ? onSaveEdit(product) : onAddProduct(product);
            resetForm(); 
        };
        reader.readAsDataURL(productImage); 
    };

    const isFormValid = () => {
        const nameRegex = /^[a-zA-Z0-9 ]{3,50}$/;
        const priceRegex = /^[0-9]+$/;
    
        if (!nameRegex.test(productName)) {
            alert('Nama Produk harus alfanumerik dan terdiri dari 3 hingga 50 karakter.');
            return false;
        }
    
        if (!productCategory) {
            alert('Silakan pilih kategori produk.');
            return false;
        }
    
        if (!['New', 'Used', 'Refurbished'].includes(freshness)) {
            alert('Silakan pilih kondisi produk yang valid.');
            return false;
        }
    
        if (!priceRegex.test(productPrice)) {
            alert('Harga produk harus berupa angka.');
            return false;
        }

        if (!productImage) {
            alert('Silakan unggah gambar produk.');
            return false;
        }
        
        return true; 
    };

    const createProductObject = (image) => ({
        productName,
        productCategory,
        freshness,
        productPrice,
        image, 
        id: editingProduct ? editingProduct.id : undefined 
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (isValidImage(file)) {
                setProductImage(file); 
            }
        }
    };

    // Fungsi untuk validasi gambar
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

    const resetForm = () => {
        setProductName('');
        setProductCategory('');
        setFreshness('');
        setProductPrice('');
        setProductImage(null);
    };

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 200) + 1; 
        console.log(randomNumber);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center my-12 w-1/2 p-4">
                <img src={logo} alt="logo" className="w-24 mx-auto mt-8" />
                <h1 className="text-[31px] font-bold mb-2">
                    {editingProduct ? "Edit Product" : "Add New Product"}
                </h1>
                <p>
                    Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
                </p>
            </div>

            <div className="w-1/3">
                <h1 className="text-[23px] font-bold">Product Details</h1>
                <form onSubmit={handleSubmit}>
                    <table className="text-[16px]">
                        <tbody>
                            <TableRow label="Product Name:">
                                <input
                                    type="text"
                                    name="productName"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    minLength={3}
                                    maxLength={50}
                                    required
                                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                                />
                            </TableRow>
                            <TableRow label="Product Category:">
                                <select
                                    name="productCategory"
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                    required
                                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                                >
                                    <option value="">Select Category</option>
                                    <option value="clothes">Clothes</option>
                                </select>
                            </TableRow>
                            <TableRow label="Product Condition:">
                                <div>
                                    {['New', 'Used', 'Refurbished'].map(condition => (
                                        <label key={condition}>
                                            <input
                                                type="radio"
                                                name="freshness"
                                                value={condition}
                                                checked={freshness === condition}
                                                onChange={(e) => setFreshness(e.target.value)}
                                            />{' '}
                                            {condition}
                                            <br />
                                        </label>
                                    ))}
                                </div>
                            </TableRow>
                            <TableRow label="Product Price:">
                                <input
                                    type="text"
                                    name="productPrice"
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    placeholder="$ 1"
                                    required
                                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                                />
                            </TableRow>
                            <TableRow label="Gambar Produk:">
                                <input 
                                    id="productImage" 
                                    type="file" 
                                    onChange={handleImageChange}
                                    accept="image/png, image/jpeg" 
                                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                                />
                            </TableRow>
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

const TableRow = ({ label, children }) => (
    <tr>
        <td>{label}</td>
        <td>{children}</td>
    </tr>
);

export default Form;
