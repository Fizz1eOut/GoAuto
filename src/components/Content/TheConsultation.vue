<script>
import { defineComponent } from 'vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppButton from '@/components/Base/AppButton.vue';
import CallbackModal from '@/components/Content/CallbackModal.vue';

export default defineComponent({
  name: 'TheConsultation',

  components: {
    AppTitle,
    AppButton,
    CallbackModal,
  },
  data() {
    return {
     active: false,
    }
  },
});
</script>

<template>
  <div class="consultation">
    <div class="consultation__container container">
      <div class="consultation__body">
        <div class="consultation__item">
          <app-title>Консультація</app-title>
          <p class="consultation__text">
            Якщо у Вас виникли питання, чи потрібна консультація, залиште заявку і ми звʼяжемося з Вами найближчим часом.
          </p>
          <div class="consultation__button">
            <app-button @click="active = true">Залишити заявку</app-button>
          </div>
        </div>

        <div class="consultation__item">
          <div class="consultation__image">
            <img src="./../../assets/images/consultation-image.png" alt="Image">
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <callback-modal v-model="active" />
</template>

<style scoped>
.consultation {
  margin-top: 120px;
}
.consultation__body {
  border-radius: 40px;
  background: #F5F7FA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 40px 0 95px;
}
.consultation__item {
  flex: 0 1 50%;
}
.consultation__text {
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: var(--color-black);
  max-width: 353px;
}
.consultation__button {
  max-width: 250px;
}
.consultation__image {

}
</style>