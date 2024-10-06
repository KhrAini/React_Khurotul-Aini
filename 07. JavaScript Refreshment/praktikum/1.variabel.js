// 1. Variabel dan Tipe Data
function swapValues(a, b) {
    let temp = a;
    a = b; 
    b = temp; 
    console.log(`Setelah ditukar: a = ${a}, b = ${b}`);
}
swapValues(5, 10);
//  Penjelasan:
//     - di antara var, let, const, menurut saya lebih baik menggunakan let, karena function di atas memungkinkan variabel untuk lebih mudah di ubah, untuk itu let yang lebih baik di gunakan di banding var dan const.

