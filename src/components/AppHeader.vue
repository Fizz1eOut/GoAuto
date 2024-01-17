<script>
import { defineComponent } from 'vue';
import AppLogo from './AppLogo.vue'
import AppNav from './AppNav.vue'
import linkNumber from './linkNumber.vue'
import BackCall from './BackCall.vue'
import AppIconCart from './icons/AppIconCart.vue';


export default defineComponent({
  name: 'AppHeader',

  components: {
    AppLogo,
    AppNav,
    linkNumber,
    BackCall,
    AppIconCart,
  },

  data() {
    return {

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
        <app-logo />

        <app-nav />

      <div class="header__contacts">
        <link-number />
        <back-call />
      </div>

      <app-icon-cart />
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
</style>