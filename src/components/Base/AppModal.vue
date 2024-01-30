<script>
import { defineComponent } from 'vue';
import ModalHeader from '@/components/Content/ModalHeader.vue';
import ModalBody from '@/components/Content/ModalBody.vue';

export default defineComponent({
  name: 'AppModal',

  emits: ['update:modelValue'],

  components: {
    ModalHeader,
    ModalBody,
  },

  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    close() {
      this.$emit('update:modelValue', false);
    },
  }
});
</script>

<template>
    <Teleport to="body">
      <div v-if="modelValue"  class="modal">
        <div class="overlay" @click.self="close">
          <div class="content">
            <modal-header @click="close"/>

            <modal-body>
              <slot></slot>
            </modal-body>
          </div>
        </div>
      </div>
    </Teleport>
</template>

<style scoped>
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
  .content {
    padding: 20px 40px 60px;
    border-radius: 10px;
    background: #EEF5FC;
    box-shadow: 2px 4px 30px 0px rgba(17, 17, 17, 0.15);
    max-width: 470px;
  }
  .title {
    color: var(--color-black);
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .title span {
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  @media (max-width: 499px) {
    .content {
      padding: 20px 20px 40px;
    }
  }
</style>