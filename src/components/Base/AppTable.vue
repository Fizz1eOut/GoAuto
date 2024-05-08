<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTable',

  components: {
  
  }
});
</script>

<template>
  <div class="wrapper">
    <table class="table">
      <slot />
    </table>
  </div>
</template>

<style>
  .wrapper {
    margin-top: 40px;
    overflow: auto;
  }
  .table {
    border-collapse: collapse;
    border-radius: 10px;
    width: 1248px;
  }
  .table th, table td {
    border: 1px solid #abbed1;
    width: 150px;
    height: 100px;
    text-align: center;
    padding: 10px;
  }
  @media (max-width: 499px) {
    .wrapper {
      margin-top: 20px;
    }
  }
</style>