import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {

  state: () => {
    return {
      products: [],
    }
  },

  getters: {
  },

  actions: {
    addProductInCart(product) {
      const existingItem = this.products.find(item => item.id === product.id);
      // console.log(existingItem);
      if (!existingItem) {
        this.products.push(product);
      }
      // this.products.push(product);
      // this.saveToLocalStorage();
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