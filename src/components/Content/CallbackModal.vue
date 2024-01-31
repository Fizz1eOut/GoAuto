<script>
import { defineComponent } from 'vue';
import AppModal from '@/components/Base/AppModal.vue';
import AppButton from '@/components/Base/AppButton.vue';
import AppInput from '@/components/Inputs/AppInput.vue'

export default defineComponent({
  name: 'CallbackModal',
  
  components: {
    AppModal,
    AppButton,
    AppInput,
  },
});
</script>

<template>
  <app-modal>
    <h2 class="content__title">Залиште заявку, ми зв'яжемося з Вами <span>протягом 30 хвилин.</span></h2>

    <form action="#" class="content__form form-content">
      <div class="content__item">
        <app-input placeholder="Імʼя та прізвище"/>
      </div>
      <div class="content__item">
        <app-input placeholder="Номер телефону"/>
      </div>
      <div class="content__bottom">
        <app-button>Залишити заявку</app-button>
        <div class="form-content__text">Натискаючи на кнопку, Ви приймаєте положення та згоду на обробку персональних даних.</div>
      </div>
    </form>
  </app-modal>
</template>

<style scoped>
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
.form-content__text {
  margin-top: 12px;
  color: var(--color-black);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.content__item {
  width: 100%;
  padding: 0 20px;
}
.content__item:not(:last-child) {
  margin-bottom: 20px;
}
@media (max-width: 499px) {
  .content__item {
    padding: 0;
  }
  .content__title {
    font-size: 20px;
  }
  .content__title span {
    font-size: 22px;
  }
}
</style>