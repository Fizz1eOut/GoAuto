<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterQuery',

  components: {
    
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    value() { // берет данные по имени из урл, затем забирает их из слота и прокидывает в компонент
      const value = this.$route.query[this.name] ?? [];
      console.log(value);

      return Array.isArray(value) ? value : [value];
    },
  },

  methods: {
    update(value) { // если выбрали другое значение, то вызывается функция и обновляет урл
      const query = { ...this.$route.query, [this.name]: value };
      console.log(query);
      // Добавляем проверку на значение 0
      if (value === 0) {
        return; // Не обновляем урл
      }

      this.$router.push({ query });
    },
  },
});
</script>

<template>
  <slot :value="value" :update="update" />
</template>

<style scoped>

</style>
