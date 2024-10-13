import React from 'react';
import logo from '../assets/Logo.png'; 

const Form = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center my-12 w-1/2 p-4">
        <img src={logo} alt="logo Bootstrap" className="w-24 mx-auto mt-8" />
        <h1 className="text-[31px] font-bold mb-2">Create Product</h1>
        <p className="text">
        Below is an example form built entirely with Bootstrap’s form controls. Each required form group has  a validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </div>

      <div className="w-1/3">
        <h1 className="text-[23px] font-bold">Detail Product</h1>
        <form>
          <table className="text-[16px]">
            <tbody>
              <tr>
                <td>Nama Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="productName"
                    minLength={6}
                    maxLength={50}
                    required=""
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                  />
                </td>
              </tr>
              <tr>
                <td>Kategori Produk:</td>
              </tr>
              <tr>
                <td>
                  <select
                    name="productCategory"
                    style={{ width: 150 }}
                    required=""
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                  >
                    <option value="clothes">Pakaian</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Kondisi Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="brandNew"
                    required=""
                  />{' '}
                  Baru
                  <br />
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="secondHand"
                    required=""
                  />{' '}
                  Bekas
                  <br />
                  <input
                    type="radio"
                    name="freshness"
                    defaultValue="refurbished"
                    required=""
                  />{' '}
                  Refurbished
                </td>
              </tr>
              <tr>
                <td>Gambar Produk:</td>
              </tr>
              <tr>
                <td>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="file"
                      name="productImage"
                      required=""
                      className="hidden"
                    />
                    <span className="border border-blue-500 bg-blue-500 text-white rounded-l-md py-1 px-2 transition duration-200 ease-in-out">
                      Pilih File
                    </span>
                    <span
                      id="fileName"
                      className="border border-blue-500 text-blue-500 bg-transparent rounded-r-md py-1 px-2 ml-0"
                    >
                      Tidak ada file yang dipilih
                    </span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Deskripsi Tambahan:</td>
              </tr>
              <tr>
                <td>
                  <textarea
                    name="additionalDescription"
                    required=""
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td>Harga Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="productPrice"
                    placeholder="$ 1"
                    required=""
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div>
        <input
          type="submit"
          defaultValue="Submit"
          className="text-white bg-blue-500 border rounded px-48 py-2 my-24"
        />
      </div>
    </div>
  );
};

export default Form;
