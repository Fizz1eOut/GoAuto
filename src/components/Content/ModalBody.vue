<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalBody',

});
</script>

<template>
      <div class="content__body">
        <slot></slot>
      </div>
</template>

<style scoped>
.content__body {
  margin-top: 40px;
}
</style>