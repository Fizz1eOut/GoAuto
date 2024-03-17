import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {

  state() {
    return {
      products: [],
    }
  },

  getters: {
    cartQuantity() {
      return this.products.length;
    },

    totalPrice() {
      return this.products.reduce((total, product) => {
        return total + (product.product ? product.product.price * product.quantity : 0);
      }, 0);
    },
  },

  actions: {
    addProductInCart(product, quantity) {
      const existingItem = this.products.some(item => item.product.id === product.id);
      // console.log(existingItem);
      if (!existingItem) {
        this.products.push({product, quantity});
      } else {
        const existingProduct = this.products.find(item => item.product.id === product.id);
        existingProduct.quantity += quantity;
      }
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