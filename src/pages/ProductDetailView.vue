<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import CardProduct from '@/components/Base/AppCardProduct.vue';
import productsData from '@/api/products.json';
import AppFeaturedProduct from '@/components/Base/AppFeaturedProduct.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductDetailView',

  components: {
    AppBreadcrumbs,
    CardProduct,
    AppFeaturedProduct,
    TheConsultation
  },
  

  computed: {
    findProduct() {
    // Получаем название товара из URL и декодируем его
    const productName = this.$route.params.alias;
    // Находим данные о товаре по названию
    return productsData.find(product => product.alias === productName);
  },
  }
});
</script>

<template>
  <app-breadcrumbs :product="findProduct" />
  <card-product :product="findProduct" />
  <app-featured-product />
  <the-consultation />
</template>

<style scoped>

</style>