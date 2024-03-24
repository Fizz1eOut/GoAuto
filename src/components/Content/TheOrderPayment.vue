<script>
import AppButton from '@/components/Base/AppButton.vue'
import ThePayment from '@/components/Content/ThePayment.vue'
import TheDelivery from '@/components/Content/TheDelivery.vue'
import TheBuyerDetails from '@/components/Content/TheBuyerDetails.vue';
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
    FormWrapper
  },

  // data() {
  //   return {
      
  //   };
  // },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().required().email('Введіть правильну адресу електронної пошти'),
        fullName: yup.string().required(),
        phoneNumber: yup.string().required().min(8, 'Номер телефону повинен містити щонайменше 8 цифр'),
      });
    },
  },
  methods: {
    onSubmit() {
      alert("КУРЬВА");
    }
  }
});
</script>

<template>
  <form-wrapper class="order-payment" :validation-schema="schema" @submit="onSubmit">
    <the-buyer-details />
    <the-delivery />
    <the-payment />
    <div class="order-payment__row">
      <app-button>Замовлення підтверджую</app-button>
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
</style>


