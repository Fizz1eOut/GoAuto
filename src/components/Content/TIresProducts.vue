<script>
import AppProduct from '@/components/Base/AppProduct.vue';
import productsData from '@/api/products.json';
import optionsData from '@/api/options.json';
import { defineComponent } from 'vue';
import AppPagination from '@/components/Base/AppPagination.vue'
import AppSelect from '@/components/Inputs/AppSelect.vue';

export default defineComponent({
  name: 'TiresProducts',

  components: {
    AppProduct,
    AppPagination,
    AppSelect
},

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      products: [],
      sortOptions: [
        { id: 1, value: 'Від дешевих до дорогих' },
        { id: 2, value: 'Від дорогих до дешевих' }
      ],
      selectedSortOption: null
    };
  },

  computed: {
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex); // Используем отфильтрованные продукты для пагинации
    },

    filteredProducts() {
      return this.products.filter((product) => this.hasFilters(product));
    },
  },

  watch: {
    selectedSortOption(newValue) {
      this.sortByPrice(newValue);
      localStorage.setItem('sort', newValue);
    }
  },

  created() {
    this.products = productsData.filter(item => item.category === 1);
    this.selectedSortOption = parseInt(localStorage.getItem('sort')) || this.sortOptions[0].id;
  },

  methods: {
    hasFilters(product) {
      return Object.entries(this.$route.query).every(([key, param]) => { // проходимся в цикле по всем query-параметрам в формате [ключ, значение] const values = param.split(',');
        const values = param.split(','); // собираем значения в массив, разбивая его по запятой const option = optionsData.find(({ name }) = name === key); 
        // console.log(values);
        const option = optionsData.find(({ name }) => name === key); // ищем опцию по ключу quey-параметра (у опции должен совпадать name
        // console.log(option);

        if (key === 'priceFrom' && parseFloat(product.price) < parseFloat(param)) {
          // Если ключ параметра равен 'priceFrom' (цена от) и цена продукта меньше указанного значения,
          // то возвращаем false, чтобы исключить продукт из результатов фильтрации.
          return false;
        }
        
        if (key === 'priceTo' && parseFloat(product.price) > parseFloat(param)) {
          // Если ключ параметра равен 'priceTo' (цена до) и цена продукта больше указанного значения,
          // то также возвращаем false, чтобы исключить продукт из результатов фильтрации.
          return false;
        }

        if (!option) { // если опция не существует, значит фильтр невалидный, пропускаем его
          return true;
        }

        const productOptions = product.options.find(({ id }) => id === option.id); // опция существует, значит ищем ее по id среди опций нашего товара
        // console.log(productOptions);
        if (!productOptions) {  // если не нашли - у товара отсутствует эта опция, под фильтрацию не попадает, сворачиваемся
          return false;
        }

        // опция есть, значит проверяем, что у этого товара хотя бы одно из значений в массиве (values) присутствует 
        // если опция - { "id": 5, "value": "Зимова"
        // a values - ["Літня", "Зимова"]
        // значит товар подходит
        return values.some((value) => String(productOptions.value) === value);
      });
    },

    sortByPrice(sortOptionId) {
      if (sortOptionId === 1) {
        this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortOptionId === 2) {
        this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    },
  },
});
</script>

<template>
  <div class="tires-products">
    <div class="tires__sort">
      <div class="tires__text">Сортувати:</div>
      <app-select v-model="selectedSortOption" :options="sortOptions" />
    </div>

    <div class="tires-products__items">
      <div v-for="tiresProduct in paginatedProducts" :key="tiresProduct.id" class="tires-products__item">
        <app-product :product="tiresProduct" />
      </div>
    </div>
    <app-pagination 
      v-if="filteredProducts.length >= 1"
      v-model:currentPage="currentPage"
      :total-items="filteredProducts.length" 
      :items-per-page="itemsPerPage" 
    />
    <div v-else class="tires-products__text">Вибачте, немає в наявності</div>
  </div>
</template>

<style scoped>
  .tires-products {
    width: 100%;
  }
  .tires__sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    max-width: 400px;
    width: 100%;
  }
  .tires__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-black);
  }
  .tires-products__items {
    margin-top: 10px;
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
  .tires-products__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
</style>
