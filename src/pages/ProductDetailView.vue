<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import CardProduct from '@/components/Base/AppCardProduct.vue';
import productsData from '@/api/products.json';
import categoriesData from '@/api/categories.json';
import AppFeaturedProduct from '@/components/Base/AppFeaturedProduct.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductDetailView',

  components: {
    AppBreadcrumbs,
    BreadcrumbItem,
    AppLink,
    IconArrowRight,
    CardProduct,
    AppFeaturedProduct,
    TheConsultation
  },

  computed: {
    findProduct() {
    // Получаем название товара из URL и декодируем его
    const productName = this.$route.params.title;
    // Находим данные о товаре по названию
    return productsData.find(product => product.title === productName);
  },
    categoryTitle() {
      // console.log(this.findProduct);
      return categoriesData.find(category => category.id === this.findProduct.category)
    }
  }
});
</script>

<template>
  <!-- Breadcrumbs -->
  <app-breadcrumbs class="breadcrumbs">
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

    <template v-if="categoryTitle.title === 'Шини'">
      <router-link to="/tires">
        <breadcrumb-item>
          <app-link>
            {{ categoryTitle.title }}
          </app-link>
        </breadcrumb-item>
      </router-link>
    </template>

    <template v-if="categoryTitle.title === 'Диски'">
      <router-link to="/rims">
        <breadcrumb-item>
          <app-link>
            {{ categoryTitle.title }}
          </app-link>
        </breadcrumb-item>
      </router-link>
    </template>

    <breadcrumb-item>
      <icon-arrow-right class="icon-arrow" />
    </breadcrumb-item>

    <breadcrumb-item>
      <app-link class="active-link">
        {{ findProduct.title }}
      </app-link>
    </breadcrumb-item>
  </app-breadcrumbs>

  <card-product :product="findProduct" />
  <app-featured-product />
  <the-consultation />
</template>

<style scoped>
  .breadcrumbs {
    margin-bottom: 30px;
  }
  .active-link {
    color: var(--color-grey);
  }
  .icon-arrow {
    width: 6px;
    height: 6px;
    fill: var(--color-black);
  }
</style>