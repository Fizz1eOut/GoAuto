<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppButton from '@/components/Base/AppButton.vue';
import { defineComponent } from 'vue';
import { useCartStore } from '@/store/cart.js';
import IconCart from '@/components/icons/IconCart.vue';
import { mapStores } from 'pinia';

export default defineComponent({
  name: 'AppProduct',

  components: {
    AppContainer,
    AppUnderlay,
    AppButton,
    IconCart,
  },
  
  props: {
    product: {
      type: Object,
      required: true
    },
  },

  // data() {
  //   return {
  //   }
  // },

  computed: {
    ...mapStores(useCartStore),

    getValue() {
      const option = this.product.options.find(opt => opt.id === 6);
      return option.value;
    },
  },

  mounted() {
    this.cartStore.loadFromLocalStorage();
  },

  methods: {
    addToCart() {
      this.cartStore.addProductInCart(this.product);
      this.cartStore.saveToLocalStorage();
    }
  }
});
</script>

<template>
  <app-underlay>
    <app-container size="sm">
      <div class="product">
        <div class="product__img">
          <img :src="product.imageUrl" alt="image">
        </div>

        <div class="product__content">
          <div class="product__title">{{ product.title }}</div>
          <div class="product__article">Артикул: {{ getValue }}</div>
          <div v-if="product.stock > 2" class="product__stock">В наявності</div>
          <div v-else-if="product.stock === 0" class="product__stock--red">Немає в наявності</div>
          <div v-else-if="product.stock <= 2" class="product__stock--red">Залишилося небагато</div>
        </div>
        <div class="product__row">
          <div class="product__price">{{ product.price }}₴</div>
          <app-button :disabled="product.addedToCart" @click="addToCart">
            Купити
            <IconCart class="icon" />
          </app-button>
        </div>
      </div>
    </app-container>
  </app-underlay>
</template>

<style>
  .product {
  }
  .product__img {
    text-align: center;
  }
  .product__img img {
    max-width: 266px;
    max-height: 266px;
  }
  .product__content {
    margin-top: 20px;
  }
  .product__content> *:not(:last-child) {
    margin-bottom: 10px;
  }
  .product__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .product__article {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .product__stock {
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-green);
  }
  .product__stock--red {
    color: #ff0000;
  }
  .product__row {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .product__price {
    width: 50%;
    font-weight: 700;
    font-size: 24px;
    color: var(--color-black);
  }
  .icon {
    margin-left: 8px;
    width: 12px;
    height: 12px;
    fill: var(--color-white);
  }
</style>