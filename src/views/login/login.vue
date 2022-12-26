<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
      class="login-form"
    >
      <div class="login-form__title">用户登录</div>

      <!-- 用户名 username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
        />
      </el-form-item>

      <!-- 密码 password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          :type="passwordType"
          name="password"
        />
        <span class="show-pwd" @click="togglePwdType">
          <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        :loading="loginLoading"
        class="login-form__btn"
        @click="handleLogin"
      >
        登录
      </el-button>

    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'

const loginHooks = () => {
  const store = useStore()

  const loginFormRef = ref(null)
  const loginLoading = ref(false)
  const passwordType = ref('password')
  const loginForm = ref({ username: 'admin', password: '123456' })
  const loginRules = ref({
    username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword() }]
  })

  // 切换密码图标
  const togglePwdType = () => {
    if (passwordType.value === 'password') {
      passwordType.value = 'text'
    } else {
      passwordType.value = 'password'
    }
  }

  // 登录操作
  const handleLogin = () => {
    loginFormRef.value.validate((valid) => {
      if (!valid) return
      loginLoading.value = true
      store
        .dispatch('user/login', loginForm.value)
        .then((res) => {
          loginLoading.value = false
        })
        // eslint-disable-next-line handle-callback-err
        .catch((error) => {})
    })
  }
  return {
    loginLoading,
    loginFormRef,
    loginForm,
    loginRules,
    passwordType,
    togglePwdType,
    handleLogin
  }
}

const {
  loginLoading, loginFormRef, loginForm, loginRules, passwordType,
  togglePwdType, handleLogin
} = loginHooks()

</script>

<style lang="scss" scoped>
@import '~@/styles/views/login.scss';
</style>
