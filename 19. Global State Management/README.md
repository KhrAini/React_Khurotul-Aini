# React_Khurotul-Aini_Batch7

- Global state management dalam React adalah metode untuk mengelola dan membagikan state di seluruh komponen aplikasi. Teknik ini memungkinkan data yang disimpan dalam state dapat diakses dan diubah oleh berbagai komponen tanpa harus mengirim props dari satu komponen ke komponen lain.

- saat yang tepat menggunakan redux adalah 
    1. saat state yang perlu di taruh di banyak tempat
    2. state pada app sering barubah
    3. logic untuk mengubah satte kompleks 
    3. ukuran codebase yang sedang-besar dan di kerjakan oleh banyak orang
    4. perlu untuk mengtahui bagaimana state di upfdate seiring dengan waltu

- Redux libraries dan tools
    1. React-Redux
    2. Redux toolkit
    3. redux DevTools extension

- Komponen penting redux
    1. Actions : di gunakan untuk memberikan informasi dari aplikasi ke store
    2. Reducer : merupakan pure JavaScript functuons yang menngambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
    3. store : objek sentral yang menyimpan state pada aplikasi
