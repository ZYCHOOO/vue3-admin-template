<template>
  <div class="markdown-container">
    <div id="markdown-box" />
  </div>
</template>

<script setup>
import MKEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { defineProps, onMounted, watch } from 'vue'

const props = defineProps({
  content: { type: String }
})

// editor 实例
let mkEditor
let el

onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})

const initEditor = () => {
  mkEditor = new MKEditor({
    el,
    height: '500px',
    previewStyle: 'vertical',
    language: 'zh-CH'
  })

  // 数据回显
  if (props.content) {
    mkEditor.setHTML(props.content)
  }
}

const getContent = () => {
  return mkEditor.getHTML()
}

</script>

<style lang="scss" scoped>

</style>
