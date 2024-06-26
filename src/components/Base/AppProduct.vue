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
    removeProduct() {
      this.cartStore.removeProductCart(this.product)
    },
  }
});
</script>

<template>
  <app-underlay>
    <app-container size="sm">
      <router-link :to="{ name: 'ProductDetailView', params: { alias: product.alias } }">
        <div class="product">
          <div v-if="product.featured" class="product__badge">Хіт</div>
          <div class="product__img">
            <img :src="product.imageUrl" alt="image">
          </div>

          <div class="product__content">
            <div class="product__title">{{ product.title }}</div>
            <div class="product__article">Артикул: {{ sku }}</div>
            <div v-if="product.stock > 2" class="product__stock">В наявності</div>
            <div v-else-if="product.stock === 0" class="product__stock--red">Немає в наявності</div>
            <div v-else-if="product.stock <= 2" class="product__stock--red">Залишилося небагато</div>
            <div class="product__price">{{ product.price }}₴</div>
          </div>
          <div class="product__row">
            <template v-if="!isAddded">
              <app-button @click.prevent="addToCart">
                Додати в кошик
                <IconCart class="icon" />
              </app-button>
            </template>
            <template v-else>
              <app-counter :count="productQuantity" @increment="addToCart" @decrement="removeProduct" />
              <router-link to="/cart">
                <app-button>
                  У кошик
                  <IconCart class="icon" />
                </app-button>
              </router-link>
            </template>
          </div>
        </div>
      </router-link>
    </app-container>
  </app-underlay>
</template>

<style scoped>
  .product {
    position: relative;
  }
  .product__badge {
    position: absolute;
    top: 0px;
    left: 10px;
    z-index: 1;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 50px;
    color: var(--color-white);
    background-color: #EA3F20;
    padding: 6px 12px;
  }
  .product__img {
    text-align: center;
  }
  .product__img img {
    max-width: 220px;
    height: 220px;
  }
  .product__content {
    margin-top: 20px;
  }
  .product__content> *:not(:last-child) {
    margin-bottom: 10px;
  }
  .product__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
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
  .product__row a {
    width: 100%;
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
  @media (max-width: 499px) {
    .product__img img {
      max-width: 100%;
      height: 300px;
    }
  }
</style>