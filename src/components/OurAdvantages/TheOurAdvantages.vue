<script>
import { defineComponent } from 'vue';
import AppTitle from '../AppTitle.vue';
import IconCheck from '../icons/IconCheck.vue';
import IconLock from '../icons/IconLock.vue';
import IconSpeechBubble from '../icons/IconSpeechBubble.vue';
import OurAdvantagesLine from './OurAdvantagesLine.vue';
import AppFeature from '../AppFeature.vue';

export default defineComponent({
  name: 'TheOurAdvantages',

  components: {
    AppTitle,
    IconCheck,
    IconLock,
    IconSpeechBubble,
    OurAdvantagesLine,
    AppFeature,
  }
});
</script>

<template>
  <div class="advantages">
    <div class="advantages__container container">
      <app-title>
        Наші переваги
      </app-title>

      <div class="advantages__items">
        <app-feature>
          <template #icon>
            <icon-check />
          </template>

          <template #title>
            Гарантія якості
          </template>

          <template #text>
            Ми продаємо тільки високоякісні шини та диски, що відповідають усім необхідним стандартам і вимогам.
          </template>
        </app-feature>

        <our-advantages-line />

        <app-feature>
          <template #icon>
            <icon-lock />
          </template>

          <template #title>
            Свій склад
          </template>

          <template #text>
            Ми маємо свій власний склад в Києві, де ви можете подивитись та одразу забрати свій товар.
          </template>
        </app-feature>
        
        <our-advantages-line />

        <app-feature>
          <template #icon>
            <icon-speech-bubble />
          </template>

          <template #title>
            4.9/5 оцінка клієнтів
          </template>

          <template #text>
            Саме таку оцінку, поставили нам наші клієнти за якість продукції та обслуговування.
          </template>
        </app-feature>
      </div>
    </div>
  </div>
</template>

<style scoped>
.advantages {
  margin-top: 120px;
}
.advantages__items {
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;

}
.feature {
  max-width: 330px;
}

@media (max-width: 1024px) {
  .advantages__items {
    flex-wrap: wrap;
    row-gap: 30px;
    margin-top: 40px;
  }
}
@media (max-width: 768px) {
  .feature {
  max-width: 100%;
}
}
</style>