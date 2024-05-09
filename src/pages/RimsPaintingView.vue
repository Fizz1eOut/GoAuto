<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import OurWorks from '@/components/Content/OurWorks.vue';
import RimsPaintingPrice from '@/components/Content/RimsPaintingPrice.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RimsPaintingView',

  components: {
    AppBreadcrumbs,
    BreadcrumbItem,
    AppLink,
    IconArrowRight,
    OurWorks,
    RimsPaintingPrice,
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
      <router-link to="/rims-painting">
        <app-link class="active-link">
          Фарбування дисків
        </app-link>
      </router-link>
    </breadcrumb-item>
  </app-breadcrumbs>

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