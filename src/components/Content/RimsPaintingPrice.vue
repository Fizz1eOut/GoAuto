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
  }
});
</script>

<template>
  <app-title class="title">
    Фарбування дисків
  </app-title>

  <app-table>
    <app-table-header>
      <app-table-header-item>
        Радіус
      </app-table-header-item>

      <app-table-header-item>
        Металеві
      </app-table-header-item>

      <app-table-header-item>
        Легкосплавні
      </app-table-header-item>
    </app-table-header>

    <app-table-list>
      <app-table-list-item>
        13‘‘
      </app-table-list-item>

      <app-table-list-item>
        2000
      </app-table-list-item>

      <app-table-list-item>
        2500
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        14‘‘
      </app-table-list-item>

      <app-table-list-item>
        2100
      </app-table-list-item>

      <app-table-list-item>
        2700
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        15‘‘
      </app-table-list-item>

      <app-table-list-item>
        2300
      </app-table-list-item>

      <app-table-list-item>
        2900
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        16‘‘
      </app-table-list-item>

      <app-table-list-item>
        2500
      </app-table-list-item>

      <app-table-list-item>
        3200
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        17‘‘
      </app-table-list-item>

      <app-table-list-item>
        2800
      </app-table-list-item>

      <app-table-list-item>
        3400
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        18‘‘
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        3600
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        19‘‘
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        3800
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        20‘‘
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        4500
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        Проточка дисків за комплект 
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        4000
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