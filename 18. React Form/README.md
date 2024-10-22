# React_Khurotul-Aini_Batch7

## 1. Macam-Macam Form
Dalam React, terdapat berbagai macam elemen form, di antaranya:
- `<textarea>`: Untuk input teks dalam jumlah besar.
- `<select>`: Untuk membuat dropdown list.
- Radio button: Untuk memilih satu dari beberapa opsi.
- Checkbox: Untuk memilih satu atau lebih opsi.

## 2. Controlled Component
Controlled component dalam React adalah komponen di mana elemen form (seperti input, textarea, select) dikendalikan oleh state React. Nilai dari elemen form ditentukan oleh state, dan setiap perubahan pada elemen tersebut memicu event handler (seperti `onChange`), yang kemudian memperbarui state. Dengan cara ini, React memiliki kontrol penuh atas data form, sehingga komponen menjadi lebih mudah dikelola dan diprediksi.

## 3. Uncontrolled Component
Uncontrolled component dalam React adalah komponen di mana form elements (seperti input, textarea, atau select) tidak dikontrol oleh React state. Sebaliknya, elemen form ini menyimpan dan mengelola nilai mereka sendiri melalui DOM, dan untuk mengambil nilai input, kita mengandalkan ref untuk mengakses elemen secara langsung.

## 4. Karakteristik Uncontrolled Components
Dalam uncontrolled components, React tidak secara langsung mengontrol nilai input atau perubahan pada elemen. Ini mirip dengan cara form HTML bekerja secara tradisional, di mana nilai elemen diambil dari DOM saat diperlukan.