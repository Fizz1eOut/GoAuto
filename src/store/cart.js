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
      const availableStock = product.stock - (existingItem ? existingItem.quantity : 0);
      // console.log(availableStock);
      if (availableStock > 0) {
        if (!existingItem) { 
          this.products.push({ id: product.id, price: product.price, quantity: 1 });
        } else {
          existingItem.quantity++;
        }
        this.saveToLocalStorage();
      }
    },

      removeProductCart(product) {
        const existingIndex = this.products.findIndex(item => item.id === product.id);
        // console.log(existingIndex);
        const existingItem = this.products[existingIndex];
        // console.log(existingItem);
        if (existingItem.quantity <= 1) {
          this.products.splice(existingIndex, 1);
        } else {
          existingItem.quantity--;
        }
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