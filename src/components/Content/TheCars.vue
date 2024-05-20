<script>
import AppTable from '@/components/Base/AppTable.vue';
import AppTableHeader from '@/components/Base/AppTableHeader.vue';
import AppTableListItem from '@/components/Base/AppTableListItem.vue';
import AppTableHeaderItem from '@/components/Base/AppTableHeaderItem.vue';
import AppTableList from '@/components/Base/AppTableList.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheCars',

  components: {
    AppTable,
    AppTableHeader,
    AppTableHeaderItem,
    AppTableList,
    AppTableListItem,
    AppTitle
  },

  data() {
    return {
      tableHeader: [
        { id: 1, value: 'Радіус' },
        { id: 2, value: 'Зняття та встановлення' },
        { id: 3, value: 'Монтаж та демонтаж' },
        { id: 4, value: 'Балансування' },
        { id: 5, value: 'Вартість робіт за 1 колесо' },
        { id: 6, value: 'Вартість робіт за 4 колеса' },
        { id: 7, value: 'Рихтування металевих дисків' },
        { id: 8, value: 'Рихтування литих дисків' }
      ],
      tableData: [
        { id: 1, values: ['13-14‘‘', 40, 40, 40, 120, 480, 100, 'від 140'] },
        { id: 2, values: ['15-16‘‘', 50, 50, 45, 145, 580, '130-150', 'від 180'] },
        { id: 3, values: ['17‘‘', 55, 50, 55, 160, 640, 150, 'від 250'] },
        { id: 4, values: ['18‘‘', 60, 55, 60, 200, 700, '-', 'від 300'] },
        { id: 5, values: ['19‘‘', 70, 60, 70, 200, 800, '-', 'від 350'] },
        { id: 6, values: ['20-22‘‘', 70, 70, 80, 220, 880, '-', 'від 400'] }
      ]
    };
  }
});
</script>

<template>
  <app-title class="title">
    Легкові автомобілі
  </app-title>

  <app-table>
    <app-table-header>
      <app-table-header-item v-for="headerItem in tableHeader" :key="headerItem.id">
        {{ headerItem.value }}
      </app-table-header-item>
    </app-table-header>

    <app-table-list v-for="data in tableData" :key="data.id">
      <app-table-list-item v-for="(item, index) in data.values" :key="index">
        {{ item }}
      </app-table-list-item>
    </app-table-list>
  </app-table>
</template>
<style scoped>
  .title {
    margin-top: 60px;
    text-align: center;
  }
  @media (max-width: 768px) {
    .title {
      margin-top: 40px;
      text-align: center;
    }
  }
  @media (max-width: 499px) {
    .title {
      margin-top: 40px;
    }
  }
</style>