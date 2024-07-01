<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import OurWorks from '@/components/Content/OurWorks.vue';
import RimsPaintingPrice from '@/components/Content/RimsPaintingPrice.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RimsPaintingView',

  components: {
    AppBreadcrumbs,
    OurWorks,
    RimsPaintingPrice,
  }
});
</script>

<template>
  <app-breadcrumbs />
  <our-works />
  <rims-painting-price />
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