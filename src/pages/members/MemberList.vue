<template>
  <q-page class="md:px-xl sm:px-md xs:px-sm q-py-sm flex flex-col no-wrap overflow-hidden" :style-fn="myTweak">
    <PageHeaderComponent />
    <TableSearchComponent
      class="q-mb-sm"
      :config="searchConfig"
      :show-shortcut-time-buttons="true"
      :disable-shortcut-time-buttons="timeDisable"
      @search="handleSearch"
      @update:formData="handleFormData"
    />
    <TableDataComponent class="flex-1 overflow-y-auto" />
  </q-page>
</template>

<script setup lang="ts">
import PageHeaderComponent from '@/components/PageHeaderComponent.vue'
import TableSearchComponent from '@/components/TableSearchComponent.vue'
import TableDataComponent from '@/components/TableDataComponent.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const { t } = useI18n()

defineOptions({
  name: 'MemberListPage',
})

const heightType = computed(() => {
  return width.value <= 1024 ? 'min-height' : 'height'
})
const myTweak = (offset: number) => {
  console.log(offset)
  return { [`${heightType.value}`]: offset ? `calc(100vh - ${offset}px)` : '100vh' }
}

const SEARCH_SECTION_NAMESPACE = 'member_list.search_section'
const SEARCH_SECTION_OPTIONS_NAMESPACE = 'member_list.search_section.options'
const SEARCH_SECTION_PLACEHOLDER_NAMESPACE = 'member_list.search_section.placeholder'

const timeDisable = ref(true)
const searchConfig = computed(() => [
  {
    key: 'user_name',
    label: t(`${SEARCH_SECTION_NAMESPACE}.user_name`),
    placeholder: t(`${SEARCH_SECTION_PLACEHOLDER_NAMESPACE}.user_name`),
    type: 'text',
    options: [],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'account_status',
    label: t(`${SEARCH_SECTION_NAMESPACE}.account_status`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.statusOptions[0]`), value: 'enable' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.statusOptions[1]`), value: 'disable' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'account_type',
    label: t(`${SEARCH_SECTION_NAMESPACE}.account_type`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.typeOptions[0]`), value: 'trial_member' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.typeOptions[1]`), value: 'real_member' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.typeOptions[2]`), value: 'test_member' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'vip_level',
    label: t(`${SEARCH_SECTION_NAMESPACE}.vip_level`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[0]`), value: 'VIP1' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[1]`), value: 'VIP2' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[2]`), value: 'VIP3' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[3]`), value: 'VIP4' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[4]`), value: 'VIP5' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[5]`), value: 'VIP6' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[6]`), value: 'VIP7' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[7]`), value: 'VIP8' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[8]`), value: 'VIP9' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.vipLevelOptions[9]`), value: 'VIP10' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'name',
    label: t(`${SEARCH_SECTION_NAMESPACE}.name`),
    placeholder: t(`${SEARCH_SECTION_PLACEHOLDER_NAMESPACE}.name`),
    type: 'text',
    options: [],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'verification_level',
    label: t(`${SEARCH_SECTION_NAMESPACE}.verification_level`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.verificationLevelOptions[0]`), value: 'unverified' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.verificationLevelOptions[1]`), value: 'first_verification' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.verificationLevelOptions[2]`), value: 'second_verification' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.verificationLevelOptions[3]`), value: 'third_verification' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'agent',
    label: t(`${SEARCH_SECTION_NAMESPACE}.agent`),
    placeholder: t(`${SEARCH_SECTION_PLACEHOLDER_NAMESPACE}.agent`),
    type: 'text',
    options: [],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'tags',
    label: t(`${SEARCH_SECTION_NAMESPACE}.tags`),
    placeholder: '',
    type: 'select',
    options: [
      { label: '高風險', value: 'high_risk' },
      { label: '低風險', value: 'low_risk' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 3,
  },
  {
    key: 'email',
    label: t(`${SEARCH_SECTION_NAMESPACE}.email`),
    placeholder: t(`${SEARCH_SECTION_PLACEHOLDER_NAMESPACE}.email`),
    type: 'text',
    options: [],
    multiple: false,
    clearable: true,
    disable: false,
    col: 4,
  },
  {
    key: 'mobile',
    label: t(`${SEARCH_SECTION_NAMESPACE}.mobile`),
    placeholder: t(`${SEARCH_SECTION_PLACEHOLDER_NAMESPACE}.mobile`),
    type: 'text',
    options: [],
    multiple: false,
    clearable: true,
    disable: false,
    col: 4,
  },
  {
    key: 'register_type',
    label: t(`${SEARCH_SECTION_NAMESPACE}.register_type`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[0]`), value: 'email' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[1]`), value: 'phone' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[2]`), value: 'facebook' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[3]`), value: 'google' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[4]`), value: 'x' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.registerTypeOptions[5]`), value: 'backend' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    col: 4,
  },
  {
    key: 'action_type',
    label: t(`${SEARCH_SECTION_NAMESPACE}.action_type`),
    placeholder: '',
    type: 'select',
    options: [
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.actionTypeOptions[0]`), value: 'register_time' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.actionTypeOptions[1]`), value: 'last_login_time' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.actionTypeOptions[2]`), value: 'last_game_request' },
      { label: t(`${SEARCH_SECTION_OPTIONS_NAMESPACE}.actionTypeOptions[3]`), value: 'last_withdrawal_request' },
    ],
    multiple: false,
    clearable: true,
    disable: false,
    tags: ['time_type'],
    col: 3,
  },
  {
    key: 'start_at',
    label: t(`${SEARCH_SECTION_NAMESPACE}.start_at`),
    placeholder: '',
    type: 'dateTime',
    options: [],
    multiple: false,
    clearable: true,
    disable: timeDisable.value,
    tags: ['shortcut_start_time'],
    col: 3,
  },
  {
    key: 'end_at',
    label: t(`${SEARCH_SECTION_NAMESPACE}.end_at`),
    placeholder: '',
    type: 'dateTime',
    options: [],
    multiple: false,
    clearable: true,
    disable: timeDisable.value,
    tags: ['shortcut_end_time'],
    col: 3,
  },
])

const handleSearch = (value: unknown) => {
  console.log(value)
}

const handleFormData = (value: { action_type?: unknown }) => {
  timeDisable.value = !value.action_type
}
</script>
