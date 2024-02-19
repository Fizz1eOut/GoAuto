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
    <select id="standard-select">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
      <option value="Option length">
        Option that has too long of a value to fit
      </option>
    </select>
    <span class="focus"></span>
  </div>
</template>

<style scoped>

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
  select::-ms-expand {
    display: none;
  }
  .select {
    position: relative;
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid #ABBED1;
    border-radius: 10px;
    padding: 17px 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    cursor: pointer;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

    display: grid;
    align-items: center;
    grid-template-areas: "select";
  }
  select,.select:after {
    grid-area: select;
  }
  .select::after {
    content: "";
    width: 20px;
    height: 10px;
    background-color: #717171;
    border-radius: 10px;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
  }
  select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }
</style>