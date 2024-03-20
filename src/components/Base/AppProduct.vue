<script>
import AppCounter from '@/components/Base/AppCounter.vue';
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
    AppCounter,
  },
  
  props: {
    product: {
      type: Object,
      required: true
    },
  },

  data() {  
    return {
    }
  },

  computed: {
    ...mapStores(useCartStore),

    sku() {
      const option = this.product.options.find(opt => opt.id === 6);
      return option.value;
    },

    isAddded() {
      return this.cartStore.products.some((product) => product.id === this.product.id)
    },

    productQuantity()  {
      const productInCart = this.cartStore.products.find(product => product.id === this.product.id);
      return productInCart.quantity;
    },
  },
  
  methods: {
    addToCart() {
      this.cartStore.addProductInCart(this.product);
    },
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
          <div class="product__article">Артикул: {{ sku }}</div>
          <div v-if="product.stock > 2" class="product__stock">В наявності</div>
          <div v-else-if="product.stock === 0" class="product__stock--red">Немає в наявності</div>
          <div v-else-if="product.stock <= 2" class="product__stock--red">Залишилося небагато</div>
        </div>
        <div class="product__row">
          <div class="product__price">{{ product.price }}₴</div>

          <template v-if="!isAddded">
            <app-button @click="addToCart">
              Додати в кошик
              <IconCart class="icon" />
            </app-button>
          </template>
          <template v-else>
            <router-link to="/cart">
              <app-button>
                У кошик
                <IconCart class="icon" />
              </app-button>
            </router-link>
            <app-counter :count="productQuantity" @increment="addToCart" />
          </template>
        </div>
      </div>
    </app-container>
  </app-underlay>
</template>

<style>
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