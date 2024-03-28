<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import PagesItem from '@/components/Content/PagesItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import TheTires from '@/components/Content/TheTires.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TiresView',

  components: {
    AppBreadcrumbs,
    PagesItem,
    AppLink,
    IconArrowRight,
    TheTires,
  }
});
</script>

<template>
  <app-breadcrumbs>
    <pages-item>
      <router-link to="/">
        <app-link>
          Головна
        </app-link>
      </router-link>
    </pages-item>

    <pages-item>
      <icon-arrow-right class="icon-arrow" />
    </pages-item>

    <pages-item>
      <router-link to="/cart">
        <app-link class="active-link">
          Шини
        </app-link>
      </router-link>
    </pages-item>
  </app-breadcrumbs>

  <the-tires />
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