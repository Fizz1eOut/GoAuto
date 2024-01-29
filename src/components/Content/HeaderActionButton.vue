<script>
import { defineComponent } from 'vue';
import AppModal from '@/components/Base/AppModal.vue';
import ModalBody from '@/components/Content/ModalBody.vue';
import TheCallback from '@/components/Content/TheCallback.vue'

export default defineComponent({
  name: 'HeaderActionButton',

  components: {
    AppModal,
    ModalBody,
    TheCallback,
  },

  data() {
    return {
     active: false,
    }
  },
});
</script>

<template>
  <button @click="active = true" class="button">
    Замовити консультацію
  </button>


    <app-modal v-model="active">
      <modal-body>
        <the-callback />
      </modal-body>
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
</style>  