<template>
  <div class="editor-container">
    <div id="editor-box" />
  </div>
</template>

<script setup>
import E from 'wangeditor'
import i18next from 'i18next'
import { useStore } from 'vuex'
import { watchSwitchLang } from '@/utils/i18n'
import { defineProps, defineEmits, onMounted } from 'vue'

const store = useStore()
const props = defineProps({
  height: { type: Number, default: 400 },
  modelValue: { type: String, default: '' }
})
const emits = defineEmits(['update:modelValue'])

// 初始化 editor 实例
let editor
// 获取 dom
let el

onMounted(() => {
  el = document.querySelector('#editor-box')
  initEditor()
  editor.txt.html(props.modelValue)
})

const initEditor = () => {
  editor = new E(el)
  editor.config.zIndex = 1
  // 设置富文本高度
  editor.config.height = props.height
  // 菜单栏提示
  editor.config.showMenuTooltips = true
  editor.config.menuTooltipPosition = 'down'
  editor.config.onchange = function (newHtml) {
    emits('update:modelValue', newHtml)
  }
  editor.config.onchangeTimeout = 500 // 修改为 500ms

  editor.config.lang = store.getters.language === 'zh' ? 'zh-CN' : 'en'
  editor.i18next = i18next

  editor.create()
}

watchSwitchLang(
  () => {
    const currentContent = editor.txt.html()
    editor.destroy()
    initEditor()
    editor.txt.html(currentContent)
  }
)
</script>
