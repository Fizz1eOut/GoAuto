import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {

  state() {
    return {
      products: [],
    }
  },

  getters: {
    totalQuantity() {
      return this.products.reduce((acc, product) => acc + product.quantity, 0);
    },

    totalPrice() {
      return this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    },
  },

  actions: {
    addProductInCart(product) {
      const existingItem = this.products.find(item => item.id === product.id);
      // console.log(existingItem);
      if (!existingItem) { 
        this.products.push({ id: product.id, price: product.price, quantity: 1 });
        this.saveToLocalStorage();
        return
      }
      existingItem.quantity++;
      this.saveToLocalStorage();
      },

    loadFromLocalStorage() {
      const storedItems = JSON.parse(localStorage.getItem('cart'));
      // console.log(storedItems);
      if (storedItems) {
        this.products = storedItems;
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  },
});