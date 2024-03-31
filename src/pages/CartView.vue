<script>
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import TheCheckout from '@/components/Content/TheCheckout.vue';
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',

  components: {
    AppBreadcrumbs,
    TheCheckout,
    BreadcrumbItem,
    AppLink,
    IconArrowRight,
  },

  // data() {
  //   return {
      
  //   }
  // },

  // methods: {
    
  // }
});
</script>

<template>
  <app-breadcrumbs>
    <breadcrumb-item>
      <router-link to="/">
        <app-link>
          Головна
        </app-link>
      </router-link>
    </breadcrumb-item>

    <breadcrumb-item>
      <icon-arrow-right class="icon-arrow" />
    </breadcrumb-item>

    <breadcrumb-item>
      <router-link to="/cart">
        <app-link class="active-link">
          Кошик
        </app-link>
      </router-link>
    </breadcrumb-item>
  </app-breadcrumbs>
  <the-checkout />
</template>

<style scoped>
  .active-link {
    color: var(--color-grey);
  }
  .icon-arrow {
    width: 6px;
    height: 6px;
    fill: var(--color-black);
  }
</style>
