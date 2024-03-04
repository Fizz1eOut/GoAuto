<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppButton from '@/components/Base/AppButton.vue';
import { defineComponent } from 'vue';
import IconCart from '@/components/icons/IconCart.vue';

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

  data() {
    return {
      added: false,
    }
  },
  methods: {
    buttonClick() {
      this.added = !this.added;
    },
    optionValue(optionId) {
      const option = this.product.options.find(opt => opt.id === optionId);
      return option.value;
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
          <div class="product__article">Артикул: {{ optionValue(6) }}</div>
          <div class="product__stock">{{ product.stock }}</div>
        </div>
        <div class="product__row">
          <div class="product__price">{{ product.price }}₴</div>
          <app-button :disabled="added" @click="buttonClick">
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