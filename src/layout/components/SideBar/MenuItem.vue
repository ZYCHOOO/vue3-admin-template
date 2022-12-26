<template>
  <svg-icon :icon="icon" />
  <!-- 文本 -->
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<style lang="scss" scoped></style>
