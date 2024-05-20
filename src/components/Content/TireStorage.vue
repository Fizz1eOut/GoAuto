<script>
import AppTable from '@/components/Base/AppTable.vue';
import AppTableHeader from '@/components/Base/AppTableHeader.vue';
import AppTableListItem from '@/components/Base/AppTableListItem.vue';
import AppTableHeaderItem from '@/components/Base/AppTableHeaderItem.vue';
import AppTableList from '@/components/Base/AppTableList.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TireStorage',

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
        { id: 2, value: 'Шини (4 шт.)' },
        { id: 3, value: 'Шини з дисками (4 шт.)' }
      ],
      tableData: [
        { id: 1, values: ['13-16‘‘', '150 грн/міс', '150 грн/міс'] },
        { id: 2, values: ['17-22‘‘', '750 грн/міс', '750 грн/міс'] }
      ]
    };
  }
});
</script>

<template>
  <app-title class="title">
    Сезонне зберігання шин
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