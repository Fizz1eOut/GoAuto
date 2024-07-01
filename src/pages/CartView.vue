<script>
import TheCheckout from '@/components/Content/TheCheckout.vue';
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',

  components: {
    AppBreadcrumbs,
    TheCheckout,

  },
});
</script>

<template>
  <app-breadcrumbs />
  <the-checkout />
</template>

<style scoped>
</style>
