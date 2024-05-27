<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppButton from '@/components/Base/AppButton.vue';
import AppCounter from '@/components/Base/AppCounter.vue';
import IconCart from '@/components/icons/IconCart.vue';
import optionsData from '@/api/options.json';
import { mapStores } from 'pinia';
import { useCartStore } from '@/store/cart.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCardProduct',

  components: {
    AppUnderlay,
    AppContainer,
    AppTitle,
    AppButton,
    AppCounter,
    IconCart,
},

  props: {
    product: {
      type: Object,
      required: true
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
    getOptionTitle(optionId) {
      const option = optionsData.find(opt => opt.id === optionId);
      return option ? option.title : '';
    }
  }
});
</script>

<template>
  <div class="product">
    <div class="product__img">
      <app-underlay>
        <app-container size="xl">
          <img :src="product.imageUrl" alt="зображення">
        </app-container>
      </app-underlay>
    </div>

    <div class="product__content">
      <app-title>{{ product.title }}</app-title>
      <div class="product__article">Артикул: {{ sku }}</div>
      <div v-if="product.stock > 2" class="product__stock">В наявності</div>
      <div v-else-if="product.stock === 0" class="product__stock--red">Немає в наявності</div>
      <div v-else-if="product.stock <= 2" class="product__stock--red">Залишилося небагато</div>
      <div class="product__price">{{ product.price }}₴</div>

      <div class="product__row">
        <template v-if="!isAddded">
          <app-button @click="addToCart">
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
  </div>

  <dl class="chars">
    <app-title>Всі характеристики</app-title>
    <div v-for="option in product.options" :key="option.id" class="chars__item">
      <dt class="chars__term">{{ getOptionTitle(option.id) }}</dt>
      <dd class="chars__val">{{ option.value }}</dd>
    </div>
  </dl>
</template>

<style scoped>
 .icon {
    margin-left: 8px;
    width: 12px;
    height: 12px;
    fill: var(--color-white);
  }
  .product {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 800px;
  }
  .product__img img {
    max-width: 300px;
    height: 320px;
  }
  .product__content> *:not(:last-child) {
    margin-bottom: 20px;
  }
  .product__article {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
  .product__stock {
    font-weight: 600;
    font-size: 18px;
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
    font-size: 28px;
    color: var(--color-black);
  }
  @media (max-width: 599px) {
    .product {
      flex-direction: column;
      row-gap: 20px;
    }
  }
  @media (max-width: 499px) {
    .product {
      align-items: start;
    }
    .product__img {
      width: 100%;
      text-align: center;
    }
  }

  .chars {
    margin-top: 60px;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chars__item {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: var(--color-black);
  }

  .chars__term {
    position: relative;
    overflow: hidden;
    flex-grow: 1;
  }

  .chars__val {
    margin: 0;
    width: 40%;
  }

  .chars__term::after {
    content: ".........................................................................";
    position: absolute;
  }
  @media (max-width: 499px) {
    .chars {
      margin-top: 40px;
    }
  }
</style>