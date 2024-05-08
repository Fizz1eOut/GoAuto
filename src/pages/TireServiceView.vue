<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import PriceService from '@/components/Content/PriceService.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TireServiceView',

  components: {
    AppBreadcrumbs,
    BreadcrumbItem,
    AppLink,
    IconArrowRight,
    PriceService
  }
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
      <router-link to="/tire-service">
        <app-link class="active-link">
          Шиномонтаж
        </app-link>
      </router-link>
    </breadcrumb-item>
  </app-breadcrumbs>

  <price-service />
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