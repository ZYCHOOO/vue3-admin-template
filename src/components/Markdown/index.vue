<template>
  <div class="markdown-container">
    <div id="markdown-box" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import MKEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { watchSwitchLang } from '@/utils/i18n'
import '@toast-ui/editor/dist/toastui-editor.css'
import { defineProps, onMounted, watch, defineExpose } from 'vue'

const store = useStore()
const props = defineProps({
  content: { type: String, default: '' }
})

// editor 实例
let mkEditor
let el

onMounted(() => {
  el = document.querySelector('#markdown-box')
  initMkeditor()
})

const initMkeditor = () => {
  mkEditor = new MKEditor({
    el,
    height: `${props.height}px`,
    previewStyle: 'vertical',
    language: store.getters.language === 'zh' ? 'zh-CN' : 'en'
  })

  // 数据回显
  if (props.content) {
    mkEditor.setHTML(props.content)
  }
}

const getContent = () => {
  return mkEditor.getHTML()
}

watchSwitchLang(
  () => {
    const currentContent = mkEditor.getHTML()
    mkEditor.destroy()
    initMkeditor()
    mkEditor.setHTML(currentContent)
  }
)

defineExpose({ getContent })

</script>
