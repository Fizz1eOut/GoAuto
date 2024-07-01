<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import TheContacts from '@/components/Content/TheContacts.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactsView',

  components: {
    AppBreadcrumbs,
    TheContacts
  },
});
</script>

<template>
  <app-breadcrumbs />
  <the-contacts />
</template>

<style scoped>
</style>