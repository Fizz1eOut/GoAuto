<script>
import { defineComponent } from 'vue';
import AppModal from '@/components/Base/AppModal.vue';
import TheBackCall from '@/components/Content/TheBackCall.vue';

export default defineComponent({
  name: 'HeaderActionButton',

  components: {
    AppModal,
    TheBackCall,
  },

  data() {
    return {
     active: false,
    }
  },
});
</script>

<template>
  <button @click="active = !active" class="button">
    Замовити консультацію
  </button>

  <app-modal v-if="active" :modal="active">
    <the-back-call />
  </app-modal>

</template>

<style scoped>
.button {
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-decoration-line: underline;
  color: var(--color-blue);
  cursor: pointer;
  background-color: transparent;
}
.button:hover {
  text-decoration-line: none;
}

.modal-overlay {
  position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	transition: all 0.3s ease-in-out;
}
</style>  