<script>
import TheCheckout from '@/components/Content/TheCheckout.vue'
import AppPages from '@/components/Base/AppPages.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',

  components: {
    AppPages,
    TheCheckout,
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
  <the-checkout />
</template>

<style scoped>

</style>
