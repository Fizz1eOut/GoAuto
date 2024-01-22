<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/AppButton.vue'
import IconCart from '@/components/icons/IconCart.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    AppButton,
    IconCart,
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
  <app-button>Кнопка <icon-cart /></app-button>
</template>

<style scoped>

</style>
