<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import TiresFilter from '@/components/Content/TiresFilter.vue';
import TiresProducts from '@/components/Content/TIresProducts.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheTires',

  components: {
    AppContainer,
    AppTitle,
    TiresProducts,
    TiresFilter,
},

  // data() {
  //   return {
      
  //   };
  // },
});
</script>

<template>
  <div class="tires">
    <app-container>
      <app-title>
        Шини
      </app-title>

      <div class="tires__items">
        <tires-filter />

        <tires-products />
      </div>
    </app-container>
  </div>
</template>

<style scoped>
.tires__items {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
</style>
