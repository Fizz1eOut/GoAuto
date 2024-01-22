<script>
import { defineComponent } from 'vue';
// import AppButton from '@/components/AppButton.vue'
// import IconCart from '@/components/icons/IconCart.vue';
import TheProductSelection from '../components/сhoose/TheProductSelection.vue'
import TheOurAdvantages from '../components/OurAdvantages/TheOurAdvantages.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    // AppButton,
    // IconCart,
    TheProductSelection,
    TheOurAdvantages,
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
  <the-product-selection></the-product-selection>
  <the-our-advantages></the-our-advantages>
</template>

<style scoped>

</style>
