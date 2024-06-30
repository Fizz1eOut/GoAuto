<script>
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import { ErrorMessage, Field  } from 'vee-validate';
import { defineComponent } from 'vue';

  // configure({
  //   validateOnBlur: true,
  //   validateOnChange: true,
  //   validateOnInput: false,
  //   validateOnModelUpdate: true,
  // });

export default defineComponent({
  name: 'TheBuyerDetails',

  components: {
    AppInput,
    AppSubtitle,
    Field,
    ErrorMessage,
  },

  emits: ['input'],

  data() {
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  },
});
</script>

<template>
  <div class="buyer-details">
    <app-subtitle class="buyer-details__subtitle">
      Покупець
    </app-subtitle>

    <div class="buyer-details__items">
      <div class="buyer-details__item">
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

      <div class="buyer-details__item">
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

      <div class="buyer-details__item">
        <Field v-slot="{ handleChange, handleBlur, errors }" name="email" rules="required|email">
          <app-input 
            v-model="email"
            placeholder="Електронна пошта"
            type="email"
            :class="{ 'has-error': errors.length }"
            @change="handleChange" 
            @blur="handleBlur"
          />
        </Field>
        <ErrorMessage class="error-message" name="email" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .buyer-details__subtitle {
    padding-top: 30px;
  }
  .buyer-details__items {
    margin-top: 40px;
  }
  .buyer-details__items> *:not(:last-child) {
    margin-bottom: 30px;
  }
 .error-message {
  color: #EA3F20;
  font-size: 16px;
 }
 .has-error {
  border: 1px solid #EA3F20;
  border-radius: 10px;
 }
</style>