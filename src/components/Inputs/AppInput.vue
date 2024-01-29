<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',

  props: {
    placeholder: {
      type: String,
      required: true,
    }
  },
});
</script>

<template>
    <div class="item">
      <input type="text" class="input" :placeholder="placeholder">
      <label for="#" class="label"></label>
    </div>
</template>

<style scoped>
.item {
  width: 100%;
  padding: 0 20px;
}
.item:not(:last-child) {
  margin-bottom: 20px;
}
.input {
  border-radius: 10px;
  border: 1px solid #ABBED1;
  outline: none;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: var(--color-black);
}
::-webkit-input-placeholder {
   color:    #ABBED1;
  }
  :-moz-placeholder { 
    color:    #ABBED1;
  }
  ::-moz-placeholder { 
    color:    #ABBED1;
  }
  :-ms-input-placeholder {
    color:    #ABBED1;
  }
  .content__bottom {
    padding: 0 60px;
  }
</style>