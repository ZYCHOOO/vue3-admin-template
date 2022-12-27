<template>
  <ul class="context-menu-container">
    <li @click="handleRefresh">刷新</li>
    <li @click="handleCloseRight">关闭右侧</li>
    <li @click="handleCloseOther">关闭其他</li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const props = defineProps({
  index: { type: Number, reqiured: true }
})

const emit = defineEmits(['close-menu'])

// 刷新
const handleRefresh = () => {
  router.go(0)
}
// 关闭右侧
const handleCloseRight = () => {
  store.commit('app/removeTagView', { type: 'right', index: props.index })
  emit('close-menu')
}
// 关闭其他
const handleCloseOther = () => {
  store.commit('app/removeTagView', { type: 'other', index: props.index })
  emit('close-menu')
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  padding: 5px 0;
  border-radius: 4px;
  list-style-type: none;
  font-size: 12px;
  font-weight: 400;
  background: #fff;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  color: #333;
  z-index: 3000;
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
