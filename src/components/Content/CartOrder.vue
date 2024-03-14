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

    cartItems() {
      return this.cartStore.cartItem;
    },
  },

  methods: {
    
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
          v-for="item in cartItems" 
          :key="item.id" 
          class="order"
        >
          <div class="order__img">
            <img :src="item.imageUrl" alt="">
          </div>

          <div class="order__content">
            <h3 class="order__title">{{ item.title }}</h3>
            <div class="order__article">Артикул: </div>
            <div class="order__row">
              <app-counter />

              <div class="order__price">{{ item.price }}₴</div>
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
