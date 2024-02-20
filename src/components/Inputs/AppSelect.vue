<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSelect',

  props: {
    placeholder: {
      type: String,
      required: true,
      default: '',
    }
  },
});
</script>

<template>
  <div class="select">
    <select name="select">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="2">Option 4</option>
      <option value="2">Option 5</option>
      <option value="2">OptionOptionOptionOptionOptionOptionOptionOption</option>
    </select>
  </div>
</template>

<style scoped>
  .select {
    width: 100%;
    background-color: var(--color-white);
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
    background: none;
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
  }
</style>