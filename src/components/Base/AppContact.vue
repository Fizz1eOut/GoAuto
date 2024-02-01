<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppContact',

  props: {
    format: {
      type: String,
      default: 'short',
    },
  },

  computed: {
    
    phoneNumber() {
      return this.format === 'full' ? '+38 (098) 080-83-08' : '(098) 080-83-08';
    },

    phoneNumberUrl() {
      const phone = this.phoneNumber.replaceAll(/[^+\d]/g, '');
      return `tel:${phone};`
    },
  },
});
</script>
<template>
  <div>
    <a :href="phoneNumberUrl" class="number">{{ phoneNumber }}</a>
    <slot></slot>
  </div>
</template>

<style scoped>
.number {
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: var(--color-black);
}
</style>