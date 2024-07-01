<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';

export default defineComponent({
  name: 'AppBreadcrumbs',

  components: {
    AppLink,
    IconArrowRight,
    BreadcrumbItem,
  },

  data() {
    return {
      route: useRoute()
    };
  },

  computed: {
    breadcrumbs() {
      const matched = this.route.matched.filter(({ meta }) => !!meta.title);
      const breadcrumbs = matched.map(routeRecord => ({
        title: routeRecord.meta.title,
        path: routeRecord.path,
      }));
      
      // Добавляем главную страницу в начало массива хлебных крошек
      breadcrumbs.unshift({ title: 'Головна', path: '/' });
      
      // Если текущий маршрут - это страница продукта, добавляем динамическое название
      if (this.route.name === 'ProductDetailView') {
        const productAlias = this.route.params.alias;
        breadcrumbs.push({ title: productAlias, path: this.route.path });
      }

      return breadcrumbs;
    }
  }
});
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__items">
      <breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.path">
          <app-link :class="{ 'active-link': index === breadcrumbs.length - 1 }">
            {{ breadcrumb.title }}
          </app-link>
        </router-link>
        <icon-arrow-right v-if="index < breadcrumbs.length - 1" class="icon-arrow" />
      </breadcrumb-item>
    </div>
  </div>
</template>

<style scoped>
  .breadcrumbs__items {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>
