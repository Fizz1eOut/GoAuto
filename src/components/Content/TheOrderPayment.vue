<script>
import AppButton from '@/components/Base/AppButton.vue'
import ThePayment from '@/components/Content/ThePayment.vue'
import TheDelivery from '@/components/Content/TheDelivery.vue'
import TheBuyerDetails from '@/components/Content/TheBuyerDetails.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppDivider from "@/components/Base/AppDivider.vue";
import * as yup from 'yup';
import { Form as FormWrapper } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheOrderPayment',

  components: {
    TheBuyerDetails,
    TheDelivery,
    ThePayment,
    AppButton,
    FormWrapper,
    AppTitle,
    AppDivider
  },

  // data() {
  //   return {
      
  //   };
  // },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().required(`Заповніть обов'язкове поле`).email('Введіть правильну адресу електронної пошти'),
        fullName: yup.string().required(`Заповніть обов'язкове поле`).matches(/^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]*$/, 'Введіть імʼя та прізвище'),
        phoneNumber: yup.string().required(`Заповніть обов'язкове поле`).matches(/^\d{9,}$/, 'Номер телефону повинен містити щонайменше 9 цифр'),
      });
    },
  },
  methods: {
    onSubmit() {
      this.$router.push('/order-success');
    }
  }
});
</script>

<template>
  <form-wrapper class="order-payment" :validation-schema="schema" @submit="onSubmit">
    <app-divider class="divider" />
    <app-title class="placing-order__title">
      Оформлення замовлення
    </app-title>
    <the-buyer-details />
    <the-delivery />
    <the-payment />
    <div class="order-payment__row">
      <app-button type="submit">Замовлення підтверджую</app-button>
    </div>
  </form-wrapper>
</template>

<style scoped>
  .order-payment__row {
    max-width: 250px;
    margin-top: 30px;
  }
  .order-payment__title {
    padding-bottom: 40px;
  }
  .divider {
    margin: 30px 0;
  }
</style>


