<script>
import FilterBlockTires from '@/components/Content/FilterBlockTires.vue';
import FilterBlockRims from '@/components/Content/FilterBlockRims.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheSelection',

  components: {
    FilterBlockTires,
    FilterBlockRims,
  }
});
</script>

<template>
  <div class="selection">
    <div class="selection__items">
      <div class="selection__item">
        <filter-block-tires />
      </div>

      <div class="selection__item">
        <filter-block-rims />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .selection {
    margin-top: 40px;
  }
  .selection__items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .selection__item {
    width: 100%;
  }
  @media (max-width: 991px) {
    .selection__items {
      flex-direction: column;
    }
  }
</style>
