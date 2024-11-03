import { create } from 'zustand';

const saveToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const loadFromLocalStorage = () => {
  const savedProducts = localStorage.getItem('products');
  return savedProducts ? JSON.parse(savedProducts) : [];
};

const useStore = create((set) => ({
  products: loadFromLocalStorage().length > 0 ? loadFromLocalStorage() : [],

  addProduct: (newProduct) => set((state) => {
    const updatedProducts = [...state.products, newProduct];
    saveToLocalStorage(updatedProducts);
    return { products: updatedProducts };
  }),
  
  deleteProduct: (id) => set((state) => {
    const updatedProducts = state.products.filter(product => product.id !== id);
    saveToLocalStorage(updatedProducts);
    return { products: updatedProducts };
  }),
}));

export default useStore;
