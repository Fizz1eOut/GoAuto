<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',

  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'blue',
      validator: value => ['blue', 'black', 'grey', 'lightblue'].includes(value),
    },
  },

  computed: {
    classes() {
      return {
        'button-small': this.small,
        'button-outline': this.outline,
        'button-disabled': this.disabled,
      };
    }
  }
});
</script>

<template>
  <button type="button" class="button" :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 16px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Manrope';
  color: var(--color-white);
  background-color: var(--color-blue);
  border-radius: 10px;
  border: 0.5px solid var(--color-white);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}
.button:hover {
  background-color: var(--color-blue-hover);
}
.button-small {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--color-lightblue);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.button-small:hover {
  background-color: var(--color-lightblue);
}
.button-outline {
  width: 39px;
  height: 39px;
  border-radius: 10px;
  border: 1px solid rgba(137, 147, 158, 0.60);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.button-outline:hover {
  background-color: var(--color-lightblue);
}
/* .button-cart {
  fill: var(--color-white); 
} */
.button-disabled {
  background-color: var(--color-grey);
  opacity: 0.3;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: not-allowed;
}
.button-disabled:hover {
  opacity: 0.4;
  background-color: var(--color-grey);
}
</style>