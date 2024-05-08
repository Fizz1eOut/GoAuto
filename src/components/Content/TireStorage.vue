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
  }
});
</script>

<template>
  <app-title class="title">
    Сезонне зберігання шин
  </app-title>

  <app-table>
    <app-table-header>
      <app-table-header-item>
        Радіус
      </app-table-header-item>

      <app-table-header-item>
        Шини (4 шт.)
      </app-table-header-item>

      <app-table-header-item>
        Шини з дисками (4 шт.)
      </app-table-header-item>
    </app-table-header>

    <app-table-list>
      <app-table-list-item>
        13-16‘‘
      </app-table-list-item>

      <app-table-list-item>
        150 грн/міс
      </app-table-list-item>

      <app-table-list-item>
        150 грн/міс
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        17-22‘‘
      </app-table-list-item>

      <app-table-list-item>
        750 грн/міс
      </app-table-list-item>

      <app-table-list-item>
        750 грн/міс
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