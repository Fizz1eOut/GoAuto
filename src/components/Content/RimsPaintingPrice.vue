<script>
import AppTable from '@/components/Base/AppTable.vue';
import AppTableHeader from '@/components/Base/AppTableHeader.vue';
import AppTableListItem from '@/components/Base/AppTableListItem.vue';
import AppTableHeaderItem from '@/components/Base/AppTableHeaderItem.vue';
import AppTableList from '@/components/Base/AppTableList.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RimsPaintingPrice',

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
        { id: 2, value: 'Металеві' },
        { id: 3, value: 'Легкосплавні' }
      ],
      tableData: [
        { id: 1, values: ['13‘‘', 2000, 2500] },
        { id: 2, values: ['14‘‘', 2100, 2700] },
        { id: 3, values: ['15‘‘', 2300, 2900] },
        { id: 4, values: ['16‘‘', 2500, 3200] },
        { id: 5, values: ['17‘‘', 2800, 3400] },
        { id: 6, values: ['18‘‘', '-', 3600] },
        { id: 7, values: ['19‘‘', '-', 3800] },
        { id: 8, values: ['20‘‘', '-', 4500] },
        { id: 9, values: ['Проточка дисків за комплект', '-', 4000] }
      ]
    };
  }
});
</script>

<template>
  <app-title class="title">
    Фарбування дисків
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