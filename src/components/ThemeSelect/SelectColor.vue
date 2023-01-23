<template>
  <el-dialog
    :title="$t('universal.title')"
    :model-value="modelValue"
    @close="handleClose"
    width="22%"
  >
    <div class="content">
      <p class="title">{{ $t('theme.themeColorChange') }}</p>
      <el-color-picker v-model="mColor" :predefine="predefineColors" />
    </div>
    <template #footer>
      <el-button @click="handleClose">{{
        $t('universal.cancel')
      }}</el-button>
      <el-button type="primary" @click="handleConfirm">{{
        $t('universal.confirm')
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { ref, defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: { type: Boolean, required: true }
})

const store = useStore()

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]
// 默认色值
const mColor = ref(store.getters.mainColor)

const emit = defineEmits(['update:modelValue'])

const handleConfirm = async () => {
  const newStyleText = await generateNewStyle(mColor.value)
  // 1.2 写入最新主题色
  writeNewStyle(newStyleText)
  store.commit('theme/setMainColor', mColor.value)
  handleClose()
}

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.content {
  @include flex-column;
  @include flex-center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
