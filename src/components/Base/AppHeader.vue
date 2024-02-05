<script>
import { defineComponent } from 'vue';
import AppLogo from '@/components/Base/AppLogo.vue'
import AppNav from '@/components/Base/AppNav.vue'
import navMobile from '@/components/Content/NavMobile.vue';
import AppContact from '@/components/Base/AppContact.vue';
import HeaderActionButton from '@/components/Content/HeaderActionButton.vue'
import AppBurger from '@/components/Base/AppBurger.vue';
import AppButton from '@/components/Base/AppButton.vue';
import IconCart from '@/components/icons/IconCart.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppContainer from '@/components/Base/AppContainer.vue'

export default defineComponent({
  name: 'AppHeader',

  components: {
    AppLogo,
    AppNav,
    navMobile,
    AppContact,
    HeaderActionButton,
    AppButton,
    AppBurger,
    IconCart,
    AppUnderlay,
    AppContainer,
},

  data() {
    return {
     open: false, 
    }
  },
});
</script>

<template>
  <div class="header">
    <app-container>
      <app-underlay>
        <app-container size="sm">
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
                <app-contact />
                <header-action-button />
              </div>
              <router-link to="/cart">
                <app-button outline>
                  <icon-cart class="icon-cart"/>
                </app-button>
              </router-link>
            </div>
          </div>
        </app-container>
    </app-underlay>
    </app-container>
  </div>
</template>

<style scoped>

.header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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

@media (max-width: 499px) {
  .header__row {
    display: none;
  }
}

</style>