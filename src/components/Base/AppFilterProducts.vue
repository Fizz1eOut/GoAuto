<script>
import AppProduct from '@/components/Base/AppProduct.vue';
import productsData from '@/api/products.json';
import optionsData from '@/api/options.json';
import { defineComponent } from 'vue';
import AppPagination from '@/components/Base/AppPagination.vue'
import AppSelect from '@/components/Inputs/AppSelect.vue';

export default defineComponent({
  name: 'AppFilterProducts',
  
  components: {
    AppProduct,
    AppPagination,
    AppSelect
  },

  props: {
    category: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      products: [],
      sortOptions: [
        { id: 'asc', value: 'Від дешевих до дорогих' },
        { id: 'desc', value: 'Від дорогих до дешевих'}
      ],
      selectedSortOption: this.$route.query.sort || 'asc'
    };
  },

  computed: {
    // Вычисляемое свойство для отображения товаров на текущей странице с учетом пагинации
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage; // Определение индекса начального товара на текущей странице
      const endIndex = startIndex + this.itemsPerPage; // Определение индекса конечного товара на текущей странице
      return this.sortedProducts.slice(startIndex, endIndex); // Возвращаем отсортированные товары с учетом пагинации
    },

    // Вычисляемое свойство для отфильтрованных товаров
    filteredProducts() {
      return this.products.filter((product) => this.hasFilters(product)); // Применяем фильтры к списку товаров
    },

    // Вычисляемое свойство для отсортированных товаров с учетом выбранной пользователем опции сортировки
    sortedProducts() {
      const sorted = [...this.filteredProducts]; // Копируем отфильтрованные товары для безопасности
      if (this.selectedSortOption === 'asc') {
        return sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // Сортируем по возрастанию цены
      } else if (this.selectedSortOption === 'desc') {
        return sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); // Сортируем по убыванию цены
      }
      return sorted; // Возвращаем отсортированные товары
    },
  },

  created() {
    this.products = productsData.filter(item => item.category === this.category);
  },

  methods: {
    checkFilter(product, key, param) {
      if (key === 'priceFrom') {
        // Если ключ фильтрации - 'priceFrom' (цена от),
        // и параметр является числом, то проверяем, что цена товара больше или равна указанной цене
        if (!isNaN(parseFloat(param))) {
          return parseFloat(product.price) >= parseFloat(param);
        } else {
          // Если параметр не является числом, не применяем фильтр и возвращаем true
          return true;
        }
      } else if (key === 'priceTo') {
        // Если ключ фильтрации - 'priceTo' (цена до),
        // и параметр является числом, то проверяем, что цена товара меньше или равна указанной цене
        if (!isNaN(parseFloat(param))) {
          return parseFloat(product.price) <= parseFloat(param);
        } else {
          // Если параметр не является числом, не применяем фильтр и возвращаем true
          return true;
        }
      } else {
        // Если ключ фильтрации неизвестен или не требует специальной обработки,
        // всегда возвращаем true
        return true; // По умолчанию возвращаем true для неизвестных фильтров
      }
    },

    hasFilters(product) {
      return Object.entries(this.$route.query).every(([key, param]) => { // проходимся в цикле по всем query-параметрам в формате [ключ, значение] const values = param.split(',');
        // const values = param.split(','); // собираем значения в массив, разбивая его по запятой const option = optionsData.find(({ name }) = name === key);
        const values = Array.isArray(param) ? param : [param];
        // console.log(values);
        const option = optionsData.find(({ name }) => name === key); // ищем опцию по ключу quey-параметра (у опции должен совпадать name
        // console.log(option);

       // Проверяем фильтр, используя функцию checkFilter
        if (!this.checkFilter(product, key, param)) {
          // Если товар не удовлетворяет условиям фильтрации, возвращаем false,
          // чтобы исключить его из результатов фильтрации
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
        // return values.some((value) => String(productOptions.value) === value);

        return values.length <= 0 || values.some((value) => String(productOptions.value) === value);
      });
    },

    // Метод для обновления опции сортировки и обновления URL-адреса страницы
    updateSortOption(optionId) {
      const sortOrder = this.sortOptions.find(option => option.id === optionId).id; // Получаем выбранный порядок сортировки
      this.$router.push({ query: { ...this.$route.query, sort: sortOrder } }); // Обновляем параметр запроса sort в URL-адресе
    }
  },
});
</script>

<template>
  <div class="tires-products">
    <div class="tires__sort">
      <div class="tires__text">Сортувати:</div>
      <app-select v-model="selectedSortOption" :options="sortOptions" @change="updateSortOption(selectedSortOption)" />
    </div>

    <div class="tires-products__items">
      <div v-for="tiresProduct in paginatedProducts" :key="tiresProduct.id" class="tires-products__item">
        <app-product :product="tiresProduct" />
      </div>
    </div>
    <app-pagination 
      v-if="sortedProducts.length >= 1"
      v-model:currentPage="currentPage"
      :total-items="sortedProducts.length" 
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
