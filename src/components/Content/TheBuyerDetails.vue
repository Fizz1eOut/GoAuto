<script>
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheBuyerDetails',

  components: {
    AppInput,
    AppSubtitle,
  },
  emits: ['input'],
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
      fullNameValid: false,
      phoneNumberValid: false,
      emailValid: false,
      fullNameDirty: false,
      phoneNumberDirty: false,
      emailDirty: false,
    };
  },

  methods: {
    checkInput(field) {
      switch (field) {
        case 'fullName':
          this.fullNameDirty = true;
          this.fullNameValid = /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]*$/.test(this.fullName.trim());
          break;
        case 'phoneNumber':
          this.phoneNumberDirty = true;
          this.phoneNumberValid = /^\d{10,12}$/.test(this.phoneNumber.trim());
          break;
        case 'email':
          this.emailDirty = true;
          this.emailValid = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(this.email.trim());
          break;
        default:
          break;
      }
    },

  }
});
</script>

<template>
  <div class="buyer-details">
    <app-subtitle class="buyer-details__subtitle">
      Покупець
    </app-subtitle>

    <div class="buyer-details__items">
      <div class="buyer-details__item" :class="{ 'error': !fullNameValid && fullNameDirty, 'success': fullNameValid }">
        <app-input  
          v-model="fullName"
          placeholder="Імʼя та прізвище"
          @input="checkInput('fullName')"
        />
        <span v-if="!fullNameValid && fullName.trim() && fullNameDirty" class="validation-message">Дані введені не коректно</span>
        <span v-else-if="fullNameValid" class="validation-message success">Дані введені коректно</span>
      </div>

      <div class="buyer-details__item" :class="{ 'error': !phoneNumberValid && phoneNumberDirty, 'success': phoneNumberValid }">
        <app-input 
          v-model="phoneNumber"
          placeholder="Номер телефону"
          @input="checkInput('phoneNumber')"
        />
        <span v-if="!phoneNumberValid && phoneNumber.trim() && phoneNumberDirty" class="validation-message">Дані введені не коректно</span>
        <span v-else-if="phoneNumberValid" class="validation-message success">Дані введені коректно</span>
      </div>

      <div class="buyer-details__item" :class="{ 'error': !emailValid && emailDirty, 'success': emailValid }">
        <app-input 
          v-model="email"
          placeholder="Електронна пошта"
          @input="checkInput('email')"
        />
        <span v-if="!emailValid && email.trim() && emailDirty" class="validation-message">Дані введені не коректно</span>
        <span v-else-if="emailValid" class="validation-message success">Дані введені коректно</span>
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

  .error .input {
    border-color: red;
  }

  .success .input {
    border-color: green;
  }

  .validation-message {
    color: red;
    font-size: 14px;
  }

  .validation-message.success {
    color: green;
  }
</style>