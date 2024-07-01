<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import TheTires from '@/components/Content/TheTires.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TiresView',

  components: {
    AppBreadcrumbs,
    TheTires,
  }
});
</script>

<template>
  <app-breadcrumbs />
  <the-tires />
</template>

<style scoped>
</style>