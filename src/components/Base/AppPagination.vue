<script>
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPagination',

  components: {
    IconArrowRight
  },

  props: {
    // текущая страница
    currentPage: {
      type: Number,
      required: true
    },
    // общее количество страниц
    totalPages: {
      type: Number,
      required: true
    }
  },

  emits: ['update:currentPage'],

  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },

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