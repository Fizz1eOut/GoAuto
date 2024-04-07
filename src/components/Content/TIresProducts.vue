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
      currentPage: 1,
      itemsPerPage: 6,
      products: [],
    };
  },

  computed: {
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex); // Используем отфильтрованные продукты для пагинации
    },

    filteredProducts() { // Функция обновления отфильтрованных продуктов
      // const query = this.$route.query; // Получаем текущий query параметр маршрута
      // // console.log(query);
      // this.products.filter(product => { // Фильтруем продукты на основе query параметров
      //   return Object.keys(query).every(filterKey => { // Проверяем, что все ключи query параметров соответствуют условиям фильтрации
      //     const selectedValues = query[filterKey].split(','); // Получаем выбранные значения фильтра
      //     if (filterKey === 'seasons' || filterKey === 'brands') { // Если ключ соответствует сезонам или брендам
      //       return selectedValues.some(selectedValue => { // Проверяем, что хотя бы одно из выбранных значений соответствует опции продукта
      //         return product.options.some(option => option.value === selectedValue);
      //       });
      //     } else { // Если ключ соответствует другим свойствам продукта
      //       return selectedValues.includes(product[filterKey]); // Проверяем, что выбранные значения включают значение свойства продукта
      //     }
      //   });
      // });
      // // this.currentPage = 1; // При изменении отфильтрованных продуктов сбрасываем текущую страницу пагинации на первую

      return 1
    },
  },

  created() {
    this.products = productsData.filter(item => item.category === 1);
  },

  // methods: {

  // },
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
      :total-items="filteredProducts.length" 
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
