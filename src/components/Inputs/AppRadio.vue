<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppRadio',

  props: {
    modelValue: {
      type: [String, Number],
      required: false,
      default: null
    },
    value: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  
  emits: ['update:modelValue'],

  computed: {
    selected: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    },
  },
});
</script>

<template>
  <div class="radio">
    <label class="radio__label">
      <input
        v-model="selected"
        type="radio"
        class="radio__input"
        :value="value"
        :name="name"
      >
      <span>
        <slot />
      </span>
    </label>
  </div>
</template>

<style scoped>
  .radio {
    position: relative;
  }
  .radio__input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
  }
  .radio__label {
    display: flex;
    margin-left: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-black);
    cursor: pointer;
  }
  .radio__label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: 1px solid var(--color-blue);
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: 0;
    z-index: 1;
    transition: color 0.3s ease-in-out;
  }
  .radio__label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: var(--color-blue);
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 3px;
    left: 4px;
    z-index: 2;
  }
  .radio__input:checked + .radio__label:after {
    opacity: 1;
  }
</style>