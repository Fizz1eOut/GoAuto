<script>
import { defineComponent } from 'vue';
import ModalHeader from '@/components/Content/ModalHeader.vue';
import IconCross from '@/components/icons/IconCross.vue';

export default defineComponent({
  name: 'AppModal',

  emits: ['update:modelValue'],

  components: {
    ModalHeader,
    IconCross,
  },

  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  
  data() {
    return {

    }
  },
  methods: {
    close() {
      
    },
  }
});
</script>

<template>
    <Teleport to="body">
      <div v-if="modelValue"  class="modal">
        <div class="overlay" @click.self="$emit('update:modelValue', false)">
          <div class="content">
            <modal-header>
              <icon-cross class="icon" @click="$emit('update:modelValue', false)"/>
            </modal-header>

            <slot></slot>
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
    /* z-index: 10; */
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
  .icon {
    width: 18px;
    height: 18px;
    fill: var(--color-black);
    cursor: pointer;
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
</style>