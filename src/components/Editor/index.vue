<template>
  <div class="editor-container">
    <div id="editor-box" />
  </div>
</template>

<script setup>
import E from 'wangeditor'
import { defineProps, onMounted, watch } from 'vue'

const props = defineProps({
  content: { type: String }
})

// 初始化 editor 实例
let editor
// 获取 dom
let el

onMounted(() => {
  el = document.querySelector('#editor-box')
  initEditor()
})

const initEditor = () => {
  editor = new E(el)
  editor.config.zIndex = 1
  // 菜单栏提示
  editor.config.showMenuTooltips = true
  editor.config.menuTooltipPosition = 'down'
  editor.create()

  // 数据回显
  if (props.content) {
    editor.txt.html(props.content)
  }
}

</script>

<style lang="scss" scoped>

</style>
