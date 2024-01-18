<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDropdownItem',
});
</script>

<template>
  <li class="dropdown-list__item">
    <a href="" class="link">
      <slot></slot>
    </a>
  </li>
</template>

<style scoped>
.dropdown-list__item:not(:last-child) {
  margin-bottom: 16px;
} 
.link {
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-black);
  cursor: pointer;
  background-color: transparent;
}

.link:hover{
  color: var(--color-blue-hover);
}
</style>  