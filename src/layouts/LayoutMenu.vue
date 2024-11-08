<template>
  <q-scroll-area style="height: calc(100% - 64px); margin-top: 64px">
    <q-list class="text-light-text" padding>
      <q-expansion-item
        v-model="menuStatus[item.label]"
        v-for="(item, index) in menu"
        :key="index"
        :expand-separator="index !== menu.length - 1"
        :icon="item.icon"
        :label="t(`menu.${item.label}.label`)"
        class="text-medium-text"
        :class="{ 'text-white': currentMenuType === item.label }"
      >
        <q-item
          v-for="(child, childIndex) in item.children"
          :key="childIndex"
          class="text-medium-text"
          @click="navigateTo(child.name)"
          clickable
          v-ripple
        >
          <q-item-section avatar></q-item-section>

          <q-item-section :class="{ 'text-white': routeName === child.name }">
            {{ t(`menu.${item.label}.children.${child.label}.label`) }}
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
  <div
    class="absolute-top menu-logo q-pa-md cursor-pointer"
    @click="navigateTo('Home')"
  >
    <q-img fit="contain" src="@/assets/img/logo_dark.png"></q-img>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MENU_PERMISSIONS } from '@/constants/menu'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
const navigateTo = (name: string) => {
  router.push({ name: name })
}

interface MenuItem {
  icon: string
  label: string
  children: { name: string; label: string }[]
}

const menu = computed<MenuItem[]>(() => {
  return MENU_PERMISSIONS
})

const menuStatus = ref<Record<string, boolean>>({})
menu.value.forEach((item) => {
  menuStatus.value[item.label] = false
})

// 取得目前所在的路由的分類
const currentMenuType = computed(() => {
  return menu.value.find((item) =>
    item.children.some((child) => child.name === routeName.value)
  )?.label
})
// 取得目前路由名稱
const routeName = computed(() => {
  return router.currentRoute.value.name
})
</script>

<style lang="scss" scoped>
.menu-logo {
  width: 200px;
  height: 64px;
}
</style>
