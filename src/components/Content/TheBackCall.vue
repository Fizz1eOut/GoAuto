<script>
import { defineComponent } from 'vue';
import IconCross from '@/components/icons/IconCross.vue';
import AppButton from '@/components/Base/AppButton.vue';

export default defineComponent({
  name: 'TheBackCall',

  // modal: {
  //     type: Boolean,
  //     required: false,
  //     default: false
  // },


  components: {
    IconCross,
    AppButton,
  },

  data() {
    return {
     active: false, 
    }
  },
});
</script>

<template>
  <div class="content">
      <div class="content__close">
        <icon-cross class="icon"/>
      </div>

      <div class="content__body">
        <h2 class="content__title">Залиште заявку, ми зв'яжемося з Вами <span>протягом 30 хвилин.</span></h2>

        <form action="#" class="content__form form-content">
          <div class="form-content__item">
            <input type="text" class="form-content__input" placeholder="Імʼя та прізвище">
            <label for="" class="form-content__label"></label>
          </div>
          
          <div class="form-content__item">
            <input type="text" class="form-content__input" placeholder="Номер телефону">
            <label for="" class="form-content__label"></label>
          </div>

          <div class="content__bottom">
            <app-button>Залишити заявку</app-button>
            <div class="form-content__text">Натискаючи на кнопку, Ви приймаєте положення та згоду на обробку персональних даних.</div>
          </div>
        </form>
      </div>
  </div>
</template>

<style scoped>
.content {
  padding: 20px 40px 60px;
  border-radius: 10px;
  background: #EEF5FC;
  box-shadow: 2px 4px 30px 0px rgba(17, 17, 17, 0.15);
  max-width: 470px;
}
.content__close {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.icon {
  width: 18px;
  height: 18px;
  fill: var(--color-black);
}
.content__body {
  margin-top: 40px;
}
.content__title {
  color: var(--color-black);
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.content__title span {
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.content__form {
  margin-top: 35px;
}
.form-content__item {
  width: 100%;
  padding: 0 20px;
}
.form-content__item:not(:last-child) {
  margin-bottom: 20px;
}
.form-content__input {
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
.form-content__text {
  margin-top: 12px;
  color: var(--color-black);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
</style>