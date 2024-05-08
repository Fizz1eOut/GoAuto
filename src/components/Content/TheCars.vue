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
  }
});
</script>

<template>
  <app-title class="title">
    Легкові автомобілі
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

      <app-table-header-item>
        Рихтування металевих дисків
      </app-table-header-item>

      <app-table-header-item>
        Рихтування литих дисків
      </app-table-header-item>
    </app-table-header>

    <app-table-list>
      <app-table-list-item>
        13-14‘‘
      </app-table-list-item>

      <app-table-list-item>
        40
      </app-table-list-item>

      <app-table-list-item>
        40
      </app-table-list-item>

      <app-table-list-item>
        40
      </app-table-list-item>

      <app-table-list-item>
        120
      </app-table-list-item>

      <app-table-list-item>
        480
      </app-table-list-item>

      <app-table-list-item>
        100
      </app-table-list-item>

      <app-table-list-item>
        від 140
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        15-16‘‘
      </app-table-list-item>

      <app-table-list-item>
        50
      </app-table-list-item>

      <app-table-list-item>
        50
      </app-table-list-item>

      <app-table-list-item>
        45
      </app-table-list-item>

      <app-table-list-item>
        145
      </app-table-list-item>

      <app-table-list-item>
        580
      </app-table-list-item>

      <app-table-list-item>
        130-150
      </app-table-list-item>

      <app-table-list-item>
        від 180
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        17‘‘
      </app-table-list-item>

      <app-table-list-item>
        55
      </app-table-list-item>

      <app-table-list-item>
        50
      </app-table-list-item>

      <app-table-list-item>
        55
      </app-table-list-item>

      <app-table-list-item>
        160
      </app-table-list-item>

      <app-table-list-item>
        640
      </app-table-list-item>

      <app-table-list-item>
        150
      </app-table-list-item>

      <app-table-list-item>
        від 250
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        18‘‘
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        55
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        200
      </app-table-list-item>

      <app-table-list-item>
        700
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        від 300
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        19‘‘
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        60
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        200
      </app-table-list-item>

      <app-table-list-item>
        800
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        від 350
      </app-table-list-item>
    </app-table-list>

    <app-table-list>
      <app-table-list-item>
        20-22‘‘
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        70
      </app-table-list-item>

      <app-table-list-item>
        80
      </app-table-list-item>

      <app-table-list-item>
        220
      </app-table-list-item>

      <app-table-list-item>
        880
      </app-table-list-item>

      <app-table-list-item>
        -
      </app-table-list-item>

      <app-table-list-item>
        від 400
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