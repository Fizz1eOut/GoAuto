<script>
import AppTable from '@/components/Base/AppTable.vue';
import AppTableHeader from '@/components/Base/AppTableHeader.vue';
import AppTableListItem from '@/components/Base/AppTableListItem.vue';
import AppTableHeaderItem from '@/components/Base/AppTableHeaderItem.vue';
import AppTableList from '@/components/Base/AppTableList.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheCrossovers',

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
        { id: 6, value: 'Вартість робіт за 4 колеса' }
      ],
      tableData: [
        { id: 1, values: ['15-16‘‘', 60, 60, 60, 180, 720] },
        { id: 2, values: ['17-18‘‘', 70, 70, 85, 210, 880] },
        { id: 3, values: ['19-20‘‘', 75, 80, 90, 245, 980] },
        { id: 4, values: ['21-22‘‘', 80, 85, 95, 260, 1040] }
      ]
    };
  }
});
</script>

<template>
  <app-title class="title">
    Кросовери, позашляховики, мінівени, мікроавтобуси
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