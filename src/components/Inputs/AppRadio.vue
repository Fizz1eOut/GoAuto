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
  <label class="radio__label">
    <input 
      v-model="selected"
      type="radio"
      class="radio__input"
      :value="value"
      :name="name"
    >
    <span class="checkmark"></span>
    <span class="label">
      <slot />
    </span>
  </label>
</template>

<style scoped>
  .radio__label {
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .radio__label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 1px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: transparent;
    border: 1px solid var(--color-blue-hover);
    border-radius: 50%;
  }
  /* .radio__label:hover input ~ .checkmark {
    background-color: #ccc;
  } */
  /* .radio__label input:checked ~ .checkmark {
    background-color: var(--color-blue-hover);
  } */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .radio__label input:checked ~ .checkmark:after {
    display: block;
  }
  .radio__label .checkmark:after {
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-blue-hover);
  }
  .label {
    margin-left: 30px;
  }
</style>