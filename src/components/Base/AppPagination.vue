<script>
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPagination',

  components: {
    IconArrowRight
  },

  props: {
    // Текущая активная страница пагинации.
    currentPage: {
      type: Number,
      required: true
    },
    // Общее количество элементов, которые должны быть разбиты на страницы.
    totalItems: {
      type: Number,
      required: true
    },
    // Количество элементов, отображаемых на одной странице.
    itemsPerPage: {
      type: Number,
      required: true
    }
  },

  emits: ['update:currentPage'],

  computed: {
    // Вычисляемое свойство для определения общего количества страниц
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },

    // Вычисляемое свойство для определения диапазона отображаемых элементов на текущей странице
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return {
        startIndex,
        endIndex
      };
    }
  },

  methods: {
    // Метод для перехода к следующей странице
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },

    // Метод для перехода к предыдущей странице
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },

    // вызывается при щелчке на конкретную страницу
    goToPage(page) {
      this.$emit('update:currentPage', page);
    }
  }
});
</script>

<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" class="pagination-button" @click="prevPage">
      <IconArrowRight class="icon-arrow" />
    </button>
    <span 
      v-for="page in totalPages" 
      :key="page" 
      :class="{ 'active': page === currentPage }"
      class="pagination-page"
      @click="goToPage(page)" 
    >
      {{ page }}
    </span>
    <button :disabled="currentPage === totalPages" class="pagination-button" @click="nextPage">
      <IconArrowRight />
    </button>
  </div>
</template>

<style scoped>
.icon-arrow {
    transform: rotate(180deg);
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .pagination-page {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-black);
    cursor: pointer;
  }
  .pagination-button {
    background-color: transparent;
    cursor: pointer;
  }
  .active {
    color: var(--color-blue);
  }
</style>