import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {

  state: () => {
    return {
      cartItem: [],
    }
  },

  getters: {
  },

  actions: {
    addProductInCart(product) {
      const existingItem = this.cartItem.find(item => item.id === product.id);
      // console.log(existingItem);
      if (!existingItem) {
        this.cartItem.push(product);
      }
      // this.cartItem.push(product);
      // this.saveToLocalStorage();
    },

    loadFromLocalStorage() {
      const storedItems = JSON.parse(localStorage.getItem('cart'));
      // console.log(storedItems);
      if (storedItems) {
        this.cartItem = storedItems;
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItem));
    }
  },
});