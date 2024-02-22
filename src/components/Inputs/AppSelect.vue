<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSelect',

  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true,
    },
    valueKey: {
      type: String,
      default: 'id'
    },
    labelKey: {
      type: String,
      default: 'value'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      required: true,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  computed: {
    selectedOption: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  }
});
</script>

<template>
  <div class="select">
    <select v-model="selectedOption" :disabled="disabled">
      <option :value="null" disabled>{{ placeholder }}</option>
      <option 
        v-for="option in options" 
        :key="option[labelKey]" 
        :value="option[labelKey]"
      >
        {{ option[labelKey] }}
      </option>
    </select>
  </div>
</template>

<style scoped>
  .select {
    width: 100%;
    position: relative;
  }
  .select:after {
    content: "";
    border-style: solid;
    border-width: 8px 8px 0 8px;
    border-color: var(--color-grey) transparent transparent transparent;
    border-radius: 10px;
    pointer-events: none;
    position: absolute;
    top: 47%;
    right: 15px;
    z-index: 1;
    margin-top: -2px;
  }

  .select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 100%;
    padding: 17px 28px 17px 15px;
    background-color: var(--color-white);
    border-radius: 10px;
    border: 2px solid #ABBED1;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    font-family: 'Manrope', sans-serif;
    color: var(--color-grey);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .select select::-ms-expand {
    display: none;
  }

  .select select:focus {
    outline: 0;
    border-color: var(--color-blue-hover);
  }

  .select select:hover {
    cursor: pointer;
  }

  .select select option:checked {
    color: var(--color-grey);
  }
  option {
    color: var(--color-black);
    font-weight: 500;
  }
</style>