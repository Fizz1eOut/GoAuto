<script>
import ThePlacing from "@/components/Content/ThePlacing.vue";
import AppDivider from "@/components/Base/AppDivider.vue";
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThePlacingOrder',

  components: {
    AppTitle,
    AppDivider,
    ThePlacing,
  }
});
</script>

<template>
  <div class="placing-order">
    <app-title class="placing-order__title">
      Оформлення замовлення
    </app-title>
    <app-divider class="divider" />

    <div class="placing-order__body">
      <div class="placing-order__placing">
        <the-placing />
      </div>
      
      <div class="placing-order__order">

      </div>
    </div>
  </div>
</template>

<style scoped>
  .placing-order {
    margin-top: 15px;
  }
  .placing-order__title {
    padding-bottom: 40px;
  }
  .divider {
  }
  
</style>
