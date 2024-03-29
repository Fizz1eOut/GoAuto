<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  emits: ['update:modelValue'],

  data() {
    return {
      isChecked: false
    };
  },

  computed: {
    checked: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  }
};
</script>

<template>
  <div>
    <label class="checkbox">
      <input v-model="checked" type="checkbox">
      <div class="checkbox__checkmark"></div>
      <div class="checkbox__body">{{ title }}</div>
    </label>
  </div>
</template>

<style scoped>
.checkbox {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox input:checked ~ .checkbox__checkmark {
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
}
.checkbox input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
}

.checkbox .checkbox__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border: 1px solid var(--color-black);
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  border-radius: 3px;
}
.checkbox .checkbox__checkmark:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 6px;
  height: 10px;
  border: 1px solid var(--color-white);
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.checkbox .checkbox__body {
  color: var(--color-black);
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  }
</style>