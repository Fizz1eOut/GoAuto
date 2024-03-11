<script>
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  fullName: 'TheBuyerDetails',

  components: {
    AppInput,
    AppSubtitle,
  },

  data() {
    return {
      fullName: localStorage.getItem('fullName') || '',
      phoneNumber: localStorage.getItem('phoneNumber') || '',
      email: localStorage.getItem('email') || '',
    };
  },

  watch: {
    fullName(newValue) {
      if (newValue.trim() !== '') {
        localStorage.setItem('fullName', newValue);
      } else {
        localStorage.removeItem('fullName');
      }
    },
    phoneNumber(newValue) {
      if (newValue.trim() !== '') {
        localStorage.setItem('phoneNumber', newValue);
      } else {
        localStorage.removeItem('phoneNumber');
      }
    },
    email(newValue) {
      if (newValue.trim() !== '') {
        localStorage.setItem('email', newValue);
      } else {
        localStorage.removeItem('email');
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
      <div class="buyer-details__item">
        <app-input  
          v-model="fullName"
          placeholder="Імʼя та прізвище"
        />
      </div>

      <div class="buyer-details__item">
        <app-input 
          v-model="phoneNumber"
          placeholder="Номер телефону" 
        />
      </div>

      <div class="buyer-details__item">
        <app-input 
          v-model="email"
          placeholder="Електронна пошта" 
        />
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
</style>
