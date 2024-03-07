<script>
import ThePlacingOrder from '@/components/Content/ThePlacingOrder.vue'
import AppPages from '@/components/Base/AppPages.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',

  components: {
    AppPages,
    ThePlacingOrder,
  },

  // data() {
  //   return {
      
  //   }
  // },

  // methods: {
    
  // }
});
</script>

<template>
  <app-pages />
  <the-placing-order />
</template>

<style scoped>

</style>
