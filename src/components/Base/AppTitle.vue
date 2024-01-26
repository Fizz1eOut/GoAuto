<script>

</script>

<template>
  <h2 class="title">
    <slot></slot>
  </h2>
</template>

<style scoped>
.title {
  font-family: 'Manrope';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--color-black);
  }  
@media (max-width: 499.98px) {
  .title {
    font-family: 'Manrope';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: var(--color-black);
  }  
}
</style>