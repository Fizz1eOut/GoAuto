<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import TheRims from '@/components/Content/TheRims.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RimsView',

  components: {
    AppBreadcrumbs,
    TheRims,
  }
});
</script>

<template>
  <app-breadcrumbs />
  <the-rims />
</template>

<style scoped>
</style>