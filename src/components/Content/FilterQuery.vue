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
    type: {
      type: String,
      required: true,
      default: 'single',
      validator: (value) => ['single', 'multiple'].includes(value)
    }
  },

  computed: {
    value() { // берет данные по имени из урл
      if (this.type !== 'multiple') {
        return this.$route.query[this.name] ?? 0;
      }
      const value = this.$route.query[this.name] ?? [];
      // console.log(value);

      return Array.isArray(value) ? value : [value];
    },
  },

  methods: {
    update(value) { // если выбрали другое значение, то вызывается функция и обновляет урл
      const filterValue = value === 0 ? undefined : value;
      const query = { ...this.$route.query, [this.name]: filterValue };
      // console.log(query);

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
