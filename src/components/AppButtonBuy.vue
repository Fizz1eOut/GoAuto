<script>

</script>

<template>
  <button class="button--buy">Купити</button>
</template>

<style scoped>
.button--buy {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 38px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Manrope';
  color: var(--color-white);
  border-radius: 10px;
  background-color: var(--color-blue);
  transition: background-color 0.3s ease-in-out;
}
.button--buy::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-image: url(../assets/img/cart.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.button--buy:hover {
   cursor: pointer;
   background-color: var(--color-blue-hover);
}
@media (max-width: 499px) {
  .button--buy {
    padding: 14px 19px;
  }
}
</style>