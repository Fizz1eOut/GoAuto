<script>
// import PagesItem from '@/components/Content/PagesItem.vue'
// import AppLink from '@/components/Base/AppLink.vue';
// import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBreadcrumbs',

  components: {
  },

  data() {
    return {
      
    }
  },

  methods: {
    
  }
});
</script>

<template>
  <div class="pages">
    <div class="pages__items">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .pages__items {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>
