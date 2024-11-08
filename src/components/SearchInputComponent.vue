<template>
  <div :class="`col-md-${col} col-sm-6 col-xs-12`" class="q-pa-xs">
    <!-- 雙向綁定至父層 -->
    <q-input
      class="w-100"
      v-if="inputType.includes(props.type as InputType)"
      v-model="modelValue"
      outlined
      dense
      :label="props.label"
      :placeholder="props.placeholder"
      :type="props.type as InputType"
      :clearable="props.clearable"
      :disable="props.disable"
    />
    <q-select
      class="w-100"
      v-else-if="props.type === 'select'"
      outlined
      dense
      behavior="menu"
      v-model="modelValue"
      map-options
      emit-value
      :options="props.options"
      :label="props.label"
      :placeholder="props.placeholder"
      :clearable="props.clearable"
      :disable="props.disable"
      options-dense
    />
    <q-input
      class="w-100"
      v-else-if="props.type === 'dateTime'"
      v-model="modelValue"
      outlined
      dense
      :label="props.label"
      :placeholder="props.placeholder"
      type="text"
      :clearable="props.clearable"
      :disable="props.disable"
    >
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="modelValue" mask="YYYY-MM-DD HH:mm:ss">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time
              v-model="modelValue"
              with-seconds
              mask="YYYY-MM-DD HH:mm:ss"
              format24h
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

defineOptions({
  name: 'SearchInput',
})

const modelValue = ref<string | null>('')

// props 定義
const props = defineProps<{
  col: number
  type: string
  label: string
  placeholder: string
  options?: { label: string; value: string }[]
  multiple?: boolean
  clearable?: boolean
  shortcuts?: string[]
  tags?: string[]
  disable?: boolean
}>()

type InputType =
  | 'text'
  | 'number'
  | 'textarea'
  | 'time'
  | 'password'
  | 'email'
  | 'search'
  | 'tel'
  | 'file'
  | 'url'

const inputType = reactive<InputType[]>([
  'text',
  'number',
  'textarea',
  'time',
  'password',
  'email',
  'search',
  'tel',
  'file',
  'url',
])

// emit 定義
const emit = defineEmits(['update:modelValue'])

// 監聽 shortcuts 變化
watch(
  () => props.shortcuts,
  () => {
    // 若 shortcuts 非空陣列且 tags 包含 defaultStartTime，則將 shortcuts 第一個值加入 modelValue
    if (
      props.shortcuts &&
      props.shortcuts.length > 0 &&
      props.tags &&
      props.tags.includes('shortcut_start_time')
    ) {
      modelValue.value = props.shortcuts[0]
    }
    // 若 shortcuts 非空陣列且 tags 包含 defaultEndTime，則將 shortcuts 第二個值加入 modelValue
    if (
      props.shortcuts &&
      props.shortcuts.length > 0 &&
      props.tags &&
      props.tags.includes('shortcut_end_time')
    ) {
      modelValue.value = props.shortcuts[1]
    }
  }
)
// 監聽 modelValue 變化
watch(
  () => modelValue.value,
  () => {
    handleUpdateModelValue(modelValue.value)
  }
)
const handleUpdateModelValue = (value: string | number | null) => {
  emit('update:modelValue', value)
}
</script>
