<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheCopyright',


});
</script>

<template>
  <div class="copyright">
    <div class="copyright__item">
      <div class="copyright__text">© 2020-2024, All Rights Reserved</div>
    </div>

    <div class="copyright__item">
      <div class="copyright__text">Політика конфіденційності</div>
    </div>
  </div>
</template>

<style scoped>
.copyright {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
.copyright__item {
  width: 50%;
}
.copyright__text {
  font-weight: 400;
  font-size: 14px;
  color: var(--color-grey);
}
@media (max-width: 499px) {
  .copyright {
    flex-wrap: wrap;
    row-gap: 20px;
  }
  .copyright__item {
    width: 100%;
  }
}
</style>
