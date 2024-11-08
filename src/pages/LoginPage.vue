<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="login-page column w-screen h-screen items-center bg-gray">
        <q-img src="@/assets/img/logo.png" class="login-logo q-mb-xl" />
        <q-card class="login-card">
          <q-card-section class="login-card-section">
            <q-form @submit="onSubmit">
              <q-input
                class="q-mb-md"
                v-model="account"
                :rules="[(val) => requiredValidator(val, '請輸入帳號')]"
                outlined
                dense
                label="帳號"
                placeholder="請輸入帳號"
              />
              <q-input
                class="q-mb-md"
                v-model="password"
                :rules="[(val) => requiredValidator(val, '請輸入密碼')]"
                outlined
                dense
                label="密碼"
                placeholder="請輸入密碼"
                :type="!showPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="!showPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="showPwd = !showPwd"
                  />
                </template>
              </q-input>
              <Checkbox
                class="q-mb-sm flex justify-center"
                key="vue-recaptcha"
                v-model="response"
                theme="light"
              />
              <q-btn class="w-100" color="primary" label="登入" type="submit" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { requiredValidator } from '@/utils/validators'
import { Checkbox } from 'vue-recaptcha'
// @ts-expect-error ERROR: 找不到模組 "quasar"。
import { useQuasar } from 'quasar'
const $q = useQuasar()
// import router
import { useRouter } from 'vue-router'
const router = useRouter()

defineOptions({
  name: 'LoginPage',
})

const account = ref('')
const password = ref('')
const showPwd = ref(false)

const response = ref()
// 引用 auth store
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

// 登入
const login = async () => {
  try {
    const res = await authStore.login({
      username: account.value,
      password: password.value,
    })
    console.log(res)
    router.push({ name: 'Home' })
  } catch (error) {
    $q.notify({
      message: error,
    })
  }
}

const onSubmit = () => {
  login()
}
</script>
<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 20%;
    @media (min-width: 1024px) {
      padding-top: 150px;
    }
  }
  &-logo {
    width: 80%;
    @media (min-width: 768px) {
      width: 360px;
    }
  }
  &-card {
    padding: 12px;
  }
  &-card-section {
    min-width: 336px;
  }
}
</style>
