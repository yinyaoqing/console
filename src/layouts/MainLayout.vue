<template>
  <q-layout class="bg-gray q-mx-auto" view="lHh lpR fFf">
    <q-header reveal elevated class="bg-white text-text">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="text-dark"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <q-btn
          flat
          round
          icon="language"
          class="text-primary bg-sub-status-light"
        >
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list style="min-width: 100px">
              <q-item
                :class="{ 'text-primary': locale === item.id }"
                v-for="item in language"
                :key="item.id"
                clickable
                @click="changeLanguage(item.id)"
              >
                <q-item-section>{{ item.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          flat
          round
          icon="o_notifications"
          class="text-text bg-sub-status-light q-ml-sm"
        >
          <q-badge floating rounded color="red">211</q-badge>
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section class="text-red">
                  共有 211 則通知
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section class="text-text">1 則 出金審核</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-text">
                  100 則 入金審核
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-text">
                  50 則 信用卡審核
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-item>
          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.role }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-avatar size="48px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-btn flat round icon="expand_more" class="text-text">
            <q-menu transition-show="scale" transition-hide="scale">
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section class="text-text">修改密碼</q-item-section>
                </q-item>
                <q-item clickable @click="logout">
                  <q-item-section class="text-text">登出</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-dark"
      show-if-above
      v-model="leftDrawerOpen"
      :breakpoint="768"
      side="left"
    >
      <LayoutMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import LayoutMenu from './LayoutMenu.vue'
// 引入多語系
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
// 切換語系
const changeLanguage = (language) => {
  locale.value = language
}

const user = reactive({
  name: 'John Doe',
  role: 'Admin',
})

const language = reactive([
  {
    name: 'English',
    id: 'en-US',
  },
  {
    name: '繁體中文',
    id: 'zh-TW',
  },
  {
    name: '日本語',
    id: 'ja-JP',
  },
])

// 左側選單控制
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// 引入 auth
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const logout = () => {
  authStore.logout()
}
</script>

<style lang="scss" scoped></style>
