<script>
import IconFilter from '@/components/icons/IconFilter.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppFilterMobile',

    components: { 
      IconFilter 
    },

    emits: ['change'],
    
    data() {
      return {
        active: false,
      };
    },

    watch: {
      active(value) {
        document.body.style.overflow = value ? 'hidden' : '';
      }
    }
});
</script>

<template>
  <button 
    class="filter-mobile"
    @click="$emit('change', active = !active)"
  >
    <IconFilter class="icon-filter" />
    <h3 class="filter-mobile__title">Фільтри</h3>
  </button>
</template>

<style scoped>
  .filter-mobile {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--color-white);
    display: none;
  }
  .icon-filter {
    width: 20px;
    height: 20px;
  }
  .filter-mobile__title {
    font-weight: 400;
    font-size: 18px;
    color: var(--color-black);
  }

  @media (max-width: 768px) {
    .filter-mobile {
      display: flex;
    }
  }
</style>