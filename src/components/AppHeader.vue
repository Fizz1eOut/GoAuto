<script>
import { defineComponent } from 'vue';
import AppLogo from './AppLogo.vue'
import AppNav from './AppNav.vue'
import linkNumber from './linkNumber.vue'
import BackCall from './BackCall.vue'
import AppIconCart from './icons/AppIconCart.vue';
import AppBurger from './AppBurger.vue';

export default defineComponent({
  name: 'AppHeader',

  components: {
    AppLogo,
    AppNav,
    linkNumber,
    BackCall,
    AppIconCart,
    AppBurger,
  },

  data() {
    return {
     open: false, 
    }
  },


  methods: {
    
  }
});
</script>

<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__body">
        <div class="header__item">
          <app-burger @change="open = !open"/>
          <app-logo />
        </div>
        
        <app-nav :open="open"/>

      <div class="header__contacts">
        <div class="header__row">
          <link-number />
          <back-call />
        </div>
        <app-icon-cart />
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #F5F7FA;
}
.header__item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header__contacts {
  display: flex;
  align-items: center;
  gap: 14px;
}
@media (max-width: 991px) {
  .header {
    background-color: #F5F7FA;
  }
  .header__body {
    padding: 20px 0;
  }
}
@media (max-width: 499px) {
  .header__row {
    display: none;
  }
}

</style>