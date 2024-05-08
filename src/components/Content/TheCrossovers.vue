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
  }
});
</script>

<template>
  <app-title class="title">
    Кросовери, позашляховики, мінівени, мікроавтобуси
  </app-title>

  <app-table>
    <app-table-header>
      <app-table-header-item>
        Радіус
      </app-table-header-item>

      <app-table-header-item>
        Зняття та встановлення
      </app-table-header-item>

      <app-table-header-item>
        Монтаж та демонтаж
      </app-table-header-item>

      <app-table-header-item>
        Балансування
      </app-table-header-item>

      <app-table-header-item>
        Вартість робіт за 1 колесо
      </app-table-header-item>

      <app-table-header-item>
        Вартість робіт за 4 колеса
      </app-table-header-item>
    </app-table-header>

    <app-table-list>
      <app-table-list-item>
        15-16‘‘
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        180
      </app-table-list-item>

      <app-table-list-item>
        720
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        17-18‘‘
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        85
      </app-table-list-item>

      <app-table-list-item>
        210
      </app-table-list-item>

      <app-table-list-item>
        880
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        19-20‘‘
      </app-table-list-item>

      <app-table-list-item>
        75
      </app-table-list-item>

      <app-table-list-item>
        80
      </app-table-list-item>

      <app-table-list-item>
        90
      </app-table-list-item>

      <app-table-list-item>
        245
      </app-table-list-item>

      <app-table-list-item>
        980
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        21-22‘‘
      </app-table-list-item>

      <app-table-list-item>
        80
      </app-table-list-item>

      <app-table-list-item>
        85
      </app-table-list-item>

      <app-table-list-item>
        95
      </app-table-list-item>

      <app-table-list-item>
        260
      </app-table-list-item>

      <app-table-list-item>
        1040
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