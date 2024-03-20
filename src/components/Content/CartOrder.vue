<script>
import productsData from '@/api/products.json';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppContainer from '@/components/Base/AppContainer.vue';
import AppCounter from '@/components/Base/AppCounter.vue';
import { defineComponent } from 'vue';
import { useCartStore } from '@/store/cart.js';
import { mapStores } from 'pinia';


export default defineComponent({
  name: 'CartOrder',

  components: {
    AppTitle,
    AppContainer,
    AppCounter,
  },

  // data() {
  //   return {
  //   }
  // },

  computed: {
    ...mapStores(useCartStore),

    cartProducts() {
      return this.cartStore.products.map(cartProduct => {
        // console.log(cartProduct)
        const productData = productsData.find(product => product.id === cartProduct.id);
        // console.log(productData)
        if (productData) {
          return { ...productData, ...cartProduct };
        }
      });
    },
  },

  mounted() {
    this.cartStore.loadFromLocalStorage();
  },
  
  methods: {
    sku(product) {
      const option = product.options.find(opt => opt.id === 6);
      return option.value;
    },

    addToCart(product) {
      this.cartStore.addProductInCart(product);
    },
    removeProduct(product) {
      this.cartStore.removeProductCart(product)
    },
  }
});
</script>

<template>
  <div class="card-order">
    <app-container size="md">
      <app-title>
        Ваше замовлення
      </app-title>
      <div class="card-order__body">
        <TransitionGroup name="list" tag="ul">
        <div 
          v-for="product in cartProducts" 
          :key="product.id" 
          class="order"
        >
          <div class="order__img">
            <img :src="product.imageUrl" alt="">
          </div>

          <div class="order__content">
            <h3 class="order__title">{{ product.title }}</h3>
            <div class="order__article">Артикул: {{ sku(product) }}</div>
            <div class="order__row">
              <app-counter :count="product.quantity" @increment="addToCart(product)" @decrement="removeProduct(product)" />

              <div class="order__price">{{ product.price }}₴</div>
            </div>
          </div>
        </div>
      </TransitionGroup>
      </div>

      <div class="order__bottom">
        <div class="order__wrapper">
          <span class="quantity">{{ cartStore.totalQuantity }} шт на суму:</span>
          <span class="price">{{ cartStore.totalPrice }}₴</span>
        </div>

        <div class="order__wrapper">
          <div class="text">Всього:</div>
          <div class="fullprice">{{ cartStore.totalPrice }}₴</div>
        </div>
      </div>
    </app-container>
  </div>
</template>

<style scoped>
  .card-order {
    border: 1px solid #abbed1;
    border-radius: 10px;
    margin-top: 30px;
  }
  .card-order__body {
    margin-top: 30px;
  }
  .order__img  {
    width: 105px;
    text-align: center;
  }
  .order__img img {
    height: 105px;
  }
  .order {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .order__content> *:not(:last-child) {
    margin-bottom: 5px;
  }
  .order:not(:last-child) {
    margin-bottom: 30px;
  }
  .order__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .order__article {
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: var(--color-grey);
  }
  .order__row {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .order__price {
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .order__bottom {
    margin-top: 30px;
  }
  .order__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .order__wrapper:not(:last-child) {
    margin-bottom: 15px;
  }
  .quantity {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .price {
    color: var(--color-black);
  }
  .text {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: var(--color-black);
  }
  .fullprice {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: var(--color-black);  
  }
  @media (max-width: 499px) {
    .size-md {
      padding: 0px;
    }
    .card-order {
      border: none;
      border-radius: 0px;
    }
    .order {
      padding-top: 30px;
      border-top: 1px solid #abbed1;
    }
    .order:last-child {
      padding-bottom: 30px;
      border-bottom: 1px solid #abbed1;
    }
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(330px);
  }
</style>
