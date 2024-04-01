<script>
import AppProduct from '@/components/Base/AppProduct.vue';
import productsData from '@/api/products.json';
import { defineComponent } from 'vue';
import AppPagination from '@/components/Base/AppPagination.vue'

export default defineComponent({
  name: 'TiresProducts',

  components: {
    AppProduct,
    AppPagination
},

  data() {
    return {
      currentPage: 1, // Текущая страница пагинации
      itemsPerPage: 6, // Количество элементов на странице
      products: [] // Массив для хранения всех продуктов
    };
  },

  computed: {
    paginatedProducts() { // Вычисляемое свойство для отображения продуктов на текущей странице
      const startIndex = (this.currentPage - 1) * this.itemsPerPage; // Индекс начального элемента на текущей странице
      const endIndex = startIndex + this.itemsPerPage; // Индекс конечного элемента на текущей странице
      return this.products.slice(startIndex, endIndex); // Возвращаем продукты на текущей странице
    },
  },

  created() {
    this.products = productsData.filter(item => item.category === 1);
  },
});
</script>

<template>
  <div class="tires-products">
    <div class="tires-products__items">
      <div v-for="tiresProduct in paginatedProducts" :key="tiresProduct.id" class="tires-products__item">
        <app-product :product="tiresProduct" />
      </div>
    </div>
    <app-pagination 
      v-model:currentPage="currentPage"
      :total-items="products.length" 
      :items-per-page="itemsPerPage" 
    />
  </div>
</template>

<style scoped>
  .tires-products__items {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tires-products__item {
    max-width: 260px;
    width: 100%;
  }
</style>
