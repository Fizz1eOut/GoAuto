<script>
import { defineComponent } from 'vue';
import AppModal from '@/components/Base/AppModal.vue';
import AppButton from '@/components/Base/AppButton.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import AppContainer from '@/components/Base/AppContainer.vue';
import * as yup from 'yup';
import { Form as FormWrapper } from 'vee-validate';
import { ErrorMessage, Field  } from 'vee-validate';

export default defineComponent({
  name: 'CallbackModal',
  
  components: {
    AppModal,
    AppButton,
    AppInput,
    AppContainer,
    FormWrapper,
    ErrorMessage,
    Field,
  },

  emits: ['update:modelValue'],

  data() {
    return {
      fullName: '',
      phoneNumber: '',
    };
  },

  computed: {
    schema() {
      return yup.object({
        fullName: yup.string().required(`Заповніть обов'язкове поле`).matches(/^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]*$/, 'Введіть імʼя та прізвище'),
        phoneNumber: yup.string().required(`Заповніть обов'язкове поле`).matches(/^\d{9,}$/, 'Номер телефону повинен містити щонайменше 9 цифр'),
      });
    },
  },

  methods: {
    onSubmit() {
      this.$router.push('/order-success');
      this.$emit('update:modelValue', false);
    }
  }
});
</script>

<template>
  <app-modal>
    <app-container size="sm">
      <h2 class="content__title">Залиште заявку, ми зв'яжемося з Вами <span>протягом 30 хвилин.</span></h2>

      <form-wrapper class="content__form" :validation-schema="schema" @submit="onSubmit">
        <div class="content__item">
          <Field v-slot="{ handleChange, handleBlur, errors }" name="fullName" rules="required">
            <app-input  
              v-model="fullName"
              placeholder="Імʼя та прізвище"
              type="fullName"
              :class="{ 'has-error': errors.length }"
              @change="handleChange" 
              @blur="handleBlur"
            />
          </Field>
          <ErrorMessage class="error-message" name="fullName" />
        </div>
        <div class="content__item">
          <Field v-slot="{ handleChange, handleBlur, errors }" name="phoneNumber" rules="required">
            <app-input 
              v-model="phoneNumber"
              placeholder="Номер телефону"
              type="tel"
              :class="{ 'has-error': errors.length }"
              @change="handleChange" 
              @blur="handleBlur"
            />
          </Field>
          <ErrorMessage class="error-message" name="phoneNumber" />
        </div>
        <div class="content__bottom">
          <app-button type="submit">Залишити заявку</app-button>
          <div class="form-content__text">Натискаючи на кнопку, Ви приймаєте положення та згоду на обробку персональних даних.</div>
        </div>
      </form-wrapper>
    </app-container>
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
.content__button {
  max-width: 250px;
  
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
}
.content__item:not(:last-child) {
  margin-bottom: 20px;
}
.error-message {
  color: #EA3F20;
  font-size: 16px;
 }
 .has-error {
  border: 1px solid #EA3F20;
  border-radius: 10px;
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