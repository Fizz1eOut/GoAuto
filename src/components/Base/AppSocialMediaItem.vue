<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'AppSocialMediaItem',

  components: {

  },

});
</script>

<template>
  <li class="social-media__item">
    <slot></slot>
  </li>
</template>

<style scoped>
.social-media__item {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #F5F7FA;
}
</style>