<template>
  <div class="row items-center">
    <span class="text-h3 font-bold">
      {{ t(`menu.${breadcrumbs[breadcrumbs.length - 1]}`) }}
    </span>
    <q-space />

    <q-breadcrumbs align="right">
      <q-breadcrumbs-el
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb"
        :class="{
          'text-primary': index === breadcrumbs.length - 1,
          'text-medium-text': index !== breadcrumbs.length - 1,
        }"
        :label="t(`menu.${breadcrumb}`)"
      />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { convertToKebabCase } from '@/utils/filters'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()

defineOptions({
  name: 'PageHeader',
})

const breadcrumbs: string[] = reactive([])

for (let i = 1; i < route.matched.length; i++) {
  let str = ''
  for (let j = 1; j <= i; j++) {
    const item = route.matched[j]
    str += `${str ? '.' : ''}${convertToKebabCase(item.name as string)}${
      j === i ? '.label' : '.children'
    }`
  }
  breadcrumbs.push(str)
}
</script>
