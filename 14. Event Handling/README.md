  React_Khurotul-Aini_Batch7

 List Event:
-  Clipboard Events : Event terkait clipboard seperti  onCopy ,  onCut ,  onPaste .
- Form Events: Event yang terjadi dalam form, termasuk  onSubmit ,  onChange ,  onInput .
-  Mouse Events : Event terkait mouse seperti  onClick ,  onMouseEnter ,  onMouseLeave ,  onMouseMove .
-  Generic Events : Event umum seperti  onLoad ,  onError , atau event lain yang merupakan bawaan dari browser.

  State di React:
-  State  adalah data privat dari sebuah komponen. Data ini hanya bisa diakses dalam komponen yang mendefinisikannya dan tidak bisa diakses langsung oleh komponen lain.
- Untuk memodifikasi state, digunakan metode  setState . Proses pembaruan state bersifat  asynchronous , yang berarti perubahan state tidak langsung terlihat setelah pemanggilan  setState  hingga render berikutnya.

  Perbedaan Props dan State:
-  Props : Data yang hanya bisa dibaca dan dikirim dari komponen parent ke komponen child. Props tidak bisa dimodifikasi.
-  State : Data yang bisa diubah dalam komponen menggunakan  setState .

  Komponen Stateful:
-  Komponen stateful  adalah komponen yang memiliki state. Biasanya dibuat menggunakan  class-based components .
- Salah satu kelebihan komponen stateful dalam class-based components adalah adanya  lifecycle methods , seperti:
  -  componentDidMount 
  -  componentDidUpdate 
  -  componentWillUnmount 

  Komponen Stateless:
-  Komponen stateless  adalah komponen yang tidak memiliki state dan biasanya dibuat menggunakan  komponen fungsional (functional components) .
- Mereka hanya menerima  props  dan tidak mengelola state secara internal.
- Dengan adanya  React Hooks , komponen fungsional sekarang bisa memiliki state menggunakan  useState  dan bisa mengakses metode lifecycle menggunakan  useEffect .

