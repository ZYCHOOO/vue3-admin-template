<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSelectLanguage"
  >
    <div>
      <el-tooltip :content="$t('navBar.lang')" :effect="effect" placement="bottom">
        <svg-icon id="guide-lang" icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: (value) => {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})

const i18n = useI18n()
const store = useStore()
const language = computed(() => store.getters.language)

// 切换当前语言
const handleSelectLanguage = (lang) => {
  // 切换 i18n 中的 locale
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage.success(i18n.t('toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped></style>
