<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import PriceService from '@/components/Content/PriceService.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TireServiceView',

  components: {
    AppBreadcrumbs,
    PriceService
  }
});
</script>

<template>
  <app-breadcrumbs />
  <price-service />
</template>

<style scoped>
</style>