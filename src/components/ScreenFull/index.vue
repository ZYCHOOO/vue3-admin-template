<template>
  <div class="screen-full" @click="toggleScreenFull">
    <svg-icon
      id="guide-screen"
      :icon="isFullScreen ? 'exit-fullscreen' : 'fullscreen'"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullScreen = ref(false)

const change = () => {
  isFullScreen.value = screenfull.isFullscreen
}

const toggleScreenFull = () => {
  screenfull.toggle()
}

// 监听 screenfull 变化
onMounted(() => {
  screenfull.on('change', change)
})

// off：取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>
