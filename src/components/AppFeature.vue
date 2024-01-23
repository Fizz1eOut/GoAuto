<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFeature',
});
</script>

<template>
  <div class="feature">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 30px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-black);
}
.text {
  margin-top: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-grey);
}
</style>