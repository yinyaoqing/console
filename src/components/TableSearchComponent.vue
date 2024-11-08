<template>
  <q-card class="my-card">
    <q-card-section class="row q-pb-none q-pt-sm">
      <SearchInput
        v-for="(item, index) in props.config"
        :key="`${item.key}-${index}`"
        :label="item.label"
        :placeholder="item.placeholder"
        :type="item.type"
        :clearable="item.clearable"
        :options="item.options"
        :col="item.col"
        :multiple="item.multiple"
        :tags="item.tags"
        :shortcuts="shortcuts"
        :disable="item.disable"
        @update:modelValue="(value) => updateModelValue(value, item.key)"
      />
    </q-card-section>
    <q-card-section class="q-pt-none q-pb-sm">
      <div class="row justify-end items-center">
        <div
          v-if="props.showShortcutTimeButtons"
          class="row q-gutter-xs q-mr-sm"
        >
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.today`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('today')"
          />
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.yesterday`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('yesterday')"
          />
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.last7Days`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('last7Days')"
          />
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.last14Days`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('last14Days')"
          />
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.thisMonth`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('thisMonth')"
          />
          <q-btn
            :label="t(`${GENERAL_BUTTON_NAMESPACE}.lastMonth`)"
            color="primary"
            outline
            size="sm"
            :disable="props.disableShortcutTimeButtons"
            @click="defaultTime('lastMonth')"
          />
        </div>
        <q-btn
          class="q-my-xs"
          :label="t(`${GENERAL_BUTTON_NAMESPACE}.search`)"
          color="primary"
          @click="handleSearch"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, watch } from 'vue'
import SearchInput from './SearchInputComponent.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineOptions({
  name: 'ListSearch',
})

const GENERAL_BUTTON_NAMESPACE = 'general.button'

// Define an interface for the config structure
interface ConfigItem {
  key: string
  label: string
  placeholder: string
  type: string
  options: { label: string; value: string }[]
  multiple: boolean
  clearable: boolean
  col: number
  tags?: string[]
  disable: boolean
}

const props = defineProps<{
  config: ConfigItem[]
  showShortcutTimeButtons: boolean
  disableShortcutTimeButtons: boolean
}>()

const formData = reactive({})

const updateModelValue = (value: unknown, key: string) => {
  ;(formData as Record<string, unknown>)[key] = value
}

const emit = defineEmits(['search', 'update:formData'])

watch(formData, (value) => {
  emit('update:formData', value)
})
// 清除快捷時間
watch(
  () => props.disableShortcutTimeButtons,
  (value: boolean) => {
    console.log(value)
    if (value) {
      shortcuts.value = ['', '']
    }
  }
)

const handleSearch = () => {
  emit('search', formData)
}

const shortcuts = ref<string[]>([])

const defaultTime = (range: string) => {
  const today = new Date()
  const startTime = ref('')
  const endTime = ref('')
  // 取得現在時間
  switch (range) {
    case 'today':
      startTime.value = `${[
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join('-')} 23:59:59`
      break
    case 'yesterday':
      // 取得昨日起始時間
      const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000)
      startTime.value = `${[
        yesterday.getFullYear(),
        yesterday.getMonth() + 1,
        yesterday.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        yesterday.getFullYear(),
        yesterday.getMonth() + 1,
        yesterday.getDate(),
      ].join('-')} 23:59:59`
      break
    case 'last7Days':
      // 取得近7日
      const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      startTime.value = `${[
        last7Days.getFullYear(),
        last7Days.getMonth() + 1,
        last7Days.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join('-')} 23:59:59`
      break
    case 'last14Days':
      // 取得近14日
      const last14Days = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)
      startTime.value = `${[
        last14Days.getFullYear(),
        last14Days.getMonth() + 1,
        last14Days.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join('-')} 23:59:59`
      break
    case 'thisMonth':
      // 取得本月
      const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1)
      startTime.value = `${[
        thisMonth.getFullYear(),
        thisMonth.getMonth() + 1,
        thisMonth.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join('-')} 23:59:59`
      break
    case 'lastMonth':
      // 取得上月
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
      startTime.value = `${[
        lastMonth.getFullYear(),
        lastMonth.getMonth() + 1,
        lastMonth.getDate(),
      ].join('-')} 00:00:00`
      endTime.value = `${[
        lastMonth.getFullYear(),
        lastMonth.getMonth() + 1,
        new Date(
          lastMonth.getFullYear(),
          lastMonth.getMonth() + 1,
          0
        ).getDate(),
      ].join('-')} 23:59:59`
      break
  }

  shortcuts.value = [startTime.value, endTime.value]
}
</script>
