<script>
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import { ErrorMessage, Field } from 'vee-validate';
import { defineComponent } from 'vue';

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

  methods: {
  }
});
</script>

<template>
  <div class="buyer-details">
    <app-subtitle class="buyer-details__subtitle">
      Покупець
    </app-subtitle>

    <div class="buyer-details__items">
      <div class="buyer-details__item">
        <Field v-slot="{ handleChange, handleBlur }" name="fullName" rules="required">
          <app-input  
            v-model="fullName"
            placeholder="Імʼя та прізвище"
            type="fullName"
            @change="handleChange" 
            @blur="handleBlur"
          />
        </Field>
        <ErrorMessage class="error-message" name="fullName" />
      </div>

      <div class="buyer-details__item">
        <Field v-slot="{ handleChange, handleBlur }" name="phoneNumber" rules="required">
          <app-input 
            v-model="phoneNumber"
            placeholder="Номер телефону"
            type="tel"
            @change="handleChange" 
            @blur="handleBlur"
          />
        </Field>
        <ErrorMessage class="error-message" name="phoneNumber" />
      </div>

      <div class="buyer-details__item">
        <Field v-slot="{ handleChange, handleBlur }" name="email" rules="required|email">
          <app-input 
            v-model="email"
            placeholder="Електронна пошта"
            type="email"
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
</style>