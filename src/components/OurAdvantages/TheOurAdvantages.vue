<script>
import { defineComponent } from 'vue';
import AppTitle from '../AppTitle.vue';
import OurAdvantagesTitle from './OurAdvantagesTitle.vue';
import OurAdvantagesText from './OurAdvantagesText.vue';
import IconCheck from '../icons/IconCheck.vue';
import IconLock from '../icons/IconLock.vue';
import IconSpeechBubble from '../icons/IconSpeechBubble.vue';
import OurAdvantagesItem from './TheAdvantagesItem.vue';
import OurAdvantagesLine from './OurAdvantagesLine.vue';

export default defineComponent({
  name: 'TheOurAdvantages',

  components: {
    AppTitle,
    OurAdvantagesItem,
    OurAdvantagesTitle,
    OurAdvantagesText,
    IconCheck,
    IconLock,
    IconSpeechBubble,
    OurAdvantagesLine,
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
        <our-advantages-item>
          <icon-check />
          <our-advantages-title>
            Гарантія якості
          </our-advantages-title>

          <our-advantages-text>
            Ми продаємо тільки високоякісні шини та диски, що відповідають усім необхідним стандартам і вимогам.
          </our-advantages-text>
        </our-advantages-item>

        <our-advantages-line />

        <our-advantages-item>
          <icon-lock />
          <our-advantages-title>
            Свій склад
          </our-advantages-title>

          <our-advantages-text>
            Ми маємо свій власний склад в Києві, де ви можете подивитись та одразу забрати свій товар.
          </our-advantages-text>
        </our-advantages-item>

        <our-advantages-line />

        <our-advantages-item>
          <icon-speech-bubble />
          <our-advantages-title>
            4.9/5 оцінка клієнтів
          </our-advantages-title>

          <our-advantages-text>
            Саме таку оцінку, поставили нам наші клієнти за якість продукції та обслуговування.
          </our-advantages-text>
        </our-advantages-item>
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
@media (max-width: 1024px) {
  .advantages__items {
    flex-wrap: wrap;
    row-gap: 30px;
    margin-top: 40px;
  }
}
</style>