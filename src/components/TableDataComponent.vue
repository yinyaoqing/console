<template>
  <q-table
    ref="tableRef"
    class="w-100 flex"
    flat bordered
    title="Treats"
    :rows="rows"
    :columns="columns"
    row-key="name"
    :visible-columns="visibleColumns"
  >
    <template v-slot:top="props">
      <q-select
        v-model="visibleColumns"
        multiple
        outlined
        dense
        options-dense
        display-value="篩選"
        emit-value
        map-options
        :options="columns"
        option-value="name"
      />
      <div class="q-ml-md row items-center text-text">
        顯示
        <q-select
          class="q-mx-xs"
          v-model="pageSize"
          outlined
          dense
          options-dense
          :options="pageSizeOptions"
          @update:model-value="updatePageSize"
        />
        筆結果
      </div>

      <q-space />
      <q-btn color="primary" outline label="匯出至Excel" />
      <q-btn class="q-ml-md" color="primary" label="新增會員" icon="add" />
      <q-btn
        flat round dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
        class="q-ml-md"
      />
    </template>
    <template v-slot:bottom>
      <span>顯示 1 - 25 筆結果，共 5 筆</span>
      <q-space />
      <q-pagination
        v-model="current"
        size="12px"
        :max="50"
        :max-pages="6"
        direction-links
        boundary-links
        color="dark"
        active-color="primary"
        icon-first="keyboard_double_arrow_left"
        icon-last="keyboard_double_arrow_right"
        icon-prev="keyboard_arrow_left"
        icon-next="keyboard_arrow_right"
      />
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const visibleColumns = ref(['name'])

const current = ref(3)

const updatePageSize = (value: number) => {
  console.log(value)
  tableRef.value?.setPagination({ rowsPerPage: value })
}
const tableRef = ref()

onMounted(() => {
  updatePageSize(pageSize.value)
})

const pageSize = ref(25)
const pageSizeOptions = ref([5, 25, 50, 100])
const columns = [
  {
    name: 'name',
    // required: true,
    label: 'Dessert (100g serving)',
    align: 'left' as const,
    field: (row: { name: string }) => row.name,
    format: (val: string) => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center' as const, label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

</script>
