<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import categoriesData from '@/api/categories.json';

export default defineComponent({
  name: 'AppBreadcrumbs',

  components: {
    AppLink,
    IconArrowRight,
  },

  props: {
    product: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      route: useRoute()
    };
  },

  computed: {
    categoryTitle() {
      if (this.product) {
        return categoriesData.find(category => category.id === this.product.category);
      }
      return null;
    },

    breadcrumbs() {
      const matched = this.route.matched.filter(({ meta }) => !!meta.title); // Фильтруем маршруты с наличием мета-тега title
      const breadcrumbs = matched.map(routeRecord => ({
        title: routeRecord.meta.title, // Получаем title из мета-тега маршрута
        path: routeRecord.path, // Получаем путь маршрута
      }));

      breadcrumbs.unshift({ title: 'Головна', path: '/' }); // Добавляем элемент для главной страницы в начало массива
      if (this.route.name === 'ProductDetailView' && this.product) { // Если текущий маршрут - это страница продукта и продукт передан
        const category = this.categoryTitle; // Получаем категорию продукта
        if (category) { // Если категория найдена
          if (category.title === 'Шини') { // Если категория - "Шини"
            breadcrumbs.push({ title: 'Шини', path: '/tires' }); // Добавляем элемент "Шини" в хлебные крошки
          } else if (category.title === 'Диски') { // Если категория - "Диски"
            breadcrumbs.push({ title: 'Диски', path: '/rims' }); // Добавляем элемент "Диски" в хлебные крошки
          }
          breadcrumbs.push({ title: this.product.title, path: this.route.path }); // Добавляем элемент с названием продукта в хлебные крошки
        }
      }

      return breadcrumbs; // Возвращаем массив хлебных крошек
    }
  }
});
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__items">
      <div 
        v-for="(breadcrumb, index) in breadcrumbs" 
        :key="index" 
        class="breadcrumb-item"
      >
        <router-link :to="breadcrumb.path">
          <app-link :class="{ 'active-link': index === breadcrumbs.length - 1 }" class="breadcrumbs__link">
            {{ breadcrumb.title }}
          </app-link>
        </router-link>
        <icon-arrow-right v-if="index < breadcrumbs.length - 1" class="icon-arrow" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .breadcrumbs__items {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .breadcrumbs__link {
    margin-right: 5px;
  }
  .active-link {
    color: var(--color-grey);
  }
  .icon-arrow {
    width: 8px;
    height: 8px;
    fill: var(--color-black);
  }
</style>
