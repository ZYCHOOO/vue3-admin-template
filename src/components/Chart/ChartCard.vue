<template>
  <div class="chart-card">
    <div class="chart-card-header">
      <div class="chart-card-title">{{ title }}</div>
      <slot name="chart-header-extansion" />
    </div>
    <div class="chart-card-body">
      <slot name="chart-body" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
  .chart-card {
    @include flex-column;
    width: 50%;
    border-radius: 8px;
    box-shadow: 0px 2px 7px 0px rgba(66, 78, 101, 0.08);
    &-header {
      padding: 0 12px;
      @include flex-row;
      @include flex-align-center;
      height: 48px;
      border-bottom: 1px solid rgba(149, 154, 172, 0.2);
    }
    &-title {
      font-weight: bold;
    }
  }
</style>
