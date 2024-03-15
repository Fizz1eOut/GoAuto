<script>
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


  computed: {
    ...mapStores(useCartStore),
  },

  mounted() {
    this.cartStore.loadFromLocalStorage();
  },
  
  methods: {
    getValue(product) {
      const option = product.options.find(opt => opt.id === 6);
      return option.value;
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
        <div 
          v-for="product in cartStore.products" 
          :key="product.id" 
          class="order"
        >
          <div class="order__img">
            <img :src="product.imageUrl" alt="">
          </div>

          <div class="order__content">
            <h3 class="order__title">{{ product.title }}</h3>
            <div class="order__article">Артикул: {{ getValue(product) }}</div>
            <div class="order__row">
              <app-counter />

              <div class="order__price">{{ product.price }}₴</div>
            </div>
          </div>
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
  justify-content: space-between;
  gap: 20px;
}
.order__price {
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: var(--color-black);
}
</style>
