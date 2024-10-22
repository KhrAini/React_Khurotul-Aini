import React from 'react';
import logo from '../assets/Logo.png';

const Form = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Bagian Logo dan Header */}
      <div className="text-center my-12 w-1/2 p-4">
        <img src={logo} alt="Logo Bootstrap" className="w-24 mx-auto mt-8" />
        <h1 className="text-[31px] font-bold mb-2">Buat Produk</h1>
        <p>
          Berikut adalah contoh form yang dibangun sepenuhnya dengan kontrol form Bootstrap.
          Setiap grup form yang diperlukan memiliki status validasi yang dapat dipicu 
          saat mencoba mengirim form tanpa melengkapinya.
        </p>
      </div>

      {/* Bagian Form */}
      <div className="w-1/3">
        <h1 className="text-[23px] font-bold">Detail Produk</h1>
        <form>
          <table className="text-[16px]">
            <tbody>
              {/* Input Nama Produk */}
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
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                  />
                </td>
              </tr>

              {/* Input Kategori Produk */}
              <tr>
                <td>Kategori Produk:</td>
              </tr>
              <tr>
                <td>
                  <select
                    name="productCategory"
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1"
                    required
                  >
                    <option value="clothes">Pakaian</option>
                  </select>
                </td>
              </tr>

              {/* Input Kondisi Produk */}
              <tr>
                <td>Kondisi Produk:</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="freshness" value="brandNew" required /> Baru
                  <br />
                  <input type="radio" name="freshness" value="secondHand" required /> Bekas
                  <br />
                  <input type="radio" name="freshness" value="refurbished" required /> Refurbished
                </td>
              </tr>

              {/* Input Gambar Produk */}
              <tr>
                <td>Gambar Produk:</td>
              </tr>
              <tr>
                <td>
                  <label className="flex items-center cursor-pointer">
                    <input type="file" name="productImage" className="hidden" required />
                    <span className="border border-blue-500 bg-blue-500 text-white rounded-l-md py-1 px-2 transition duration-200 ease-in-out">
                      Pilih File
                    </span>
                    <span id="fileName" className="border border-blue-500 text-blue-500 bg-transparent rounded-r-md py-1 px-2 ml-0">
                      Tidak ada file yang dipilih
                    </span>
                  </label>
                </td>
              </tr>

              {/* Input Deskripsi Tambahan */}
              <tr>
                <td>Deskripsi Tambahan:</td>
              </tr>
              <tr>
                <td>
                  <textarea
                    name="additionalDescription"
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>

              {/* Input Harga Produk */}
              <tr>
                <td>Harga Produk:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="productPrice"
                    placeholder="$ 1"
                    required
                    className="border rounded-md border-gray outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 p-1 w-full"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {/* Tombol Submit */}
      <div>
        <input
          type="submit"
          value="Submit"
          className="text-white bg-blue-500 border rounded px-48 py-2 my-24"
        />
      </div>
    </div>
  );
};

export default Form;
