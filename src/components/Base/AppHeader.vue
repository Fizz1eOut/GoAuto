<script>
import { defineComponent } from 'vue';
import AppLogo from '@/components/Base/AppLogo.vue'
import AppNav from '@/components/Base/AppNav.vue'
import navMobile from '@/components/Content/NavMobile.vue';
import linkNumber from '@/components/Content/linkNumber.vue';
import HeaderActionButton from '@/components/Content/HeaderActionButton.vue'
import AppBurger from '@/components/Base/AppBurger.vue';
import AppButton from '@/components/Base/AppButton.vue';
import IconCart from '@/components/icons/IconCart.vue';

export default defineComponent({
  name: 'AppHeader',

  components: {
    AppLogo,
    AppNav,
    navMobile,
    linkNumber,
    HeaderActionButton,
    AppButton,
    AppBurger,
    IconCart,
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
          <app-burger @change="open = $event"/>
          <router-link to="/">
            <app-logo />
          </router-link>
        </div>
        
        <app-nav />
        <nav-mobile :open="open"/>

      <div class="header__contacts">
        <div class="header__row">
          <link-number />
          <header-action-button />
        </div>
        <router-link to="/CartView"><app-button outline>
          <icon-cart class="icon-cart"/>
        </app-button>
      </router-link>
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
.icon-cart {
  width: 17px;
  height: 17px;
  fill: var(--color-black);
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