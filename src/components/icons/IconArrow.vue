<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconArrow',
  
  props: {
    dropdownActive: {
      type: Boolean,
      required: false,
      default: false
    },
  },
});
</script>

<template>
    <svg :class="{ 'active': dropdownActive }" class="arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
      <path d="M1.20493 0.5H6.79494C6.89382 0.500415 6.99036 0.530142 7.07236 0.585423C7.15435 0.640705 7.21811 0.719058 7.25557 0.810574C7.29303 0.90209 7.30252 1.00266 7.28282 1.09957C7.26313 1.19647 7.21515 1.28536 7.14494 1.355L4.35494 4.145C4.30845 4.19186 4.25315 4.22906 4.19222 4.25445C4.13129 4.27983 4.06594 4.2929 3.99994 4.2929C3.93393 4.2929 3.86858 4.27983 3.80765 4.25445C3.74672 4.22906 3.69142 4.19186 3.64494 4.145L0.854935 1.355C0.784724 1.28536 0.736739 1.19647 0.717046 1.09957C0.697354 1.00266 0.706838 0.90209 0.744301 0.810574C0.781764 0.719058 0.845522 0.640705 0.927514 0.585423C1.00951 0.530142 1.10605 0.500415 1.20493 0.5Z" fill="#111111"/>
    </svg>
</template>

<style scoped>
.arrow {
  margin-bottom: 2px;
  transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out
}
.active {
  transform: rotate(180deg);
}
.link:hover .arrow path {
  fill: var(--color-blue-hover);
}
</style>