<script>
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import TheContacts from '@/components/Content/TheContacts.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactsView',

  components: {
    BreadcrumbItem,
    AppBreadcrumbs,
    AppLink,
    IconArrowRight,
    TheContacts
  },
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
      <router-link to="/contacts">
        <app-link class="active-link">
          Контакти
        </app-link>
      </router-link>
    </breadcrumb-item>
  </app-breadcrumbs>

  <the-contacts />
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