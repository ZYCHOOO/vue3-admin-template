<template>
  <div class="chart-manage">
    <!-- 环形图 -->
    <ring-chart class="chart-manage-item" />
    <!-- 柱状图 -->
    <bar-chart class="chart-manage-item" />
    <!-- 折线图 -->
    <line-chart class="chart-manage-item" />
  </div>
</template>

<script setup>
import { } from 'vue'
import BarChart from './components/BarChart'
import RingChart from './components/RingChart'
import LineChart from './components/LineChart'

</script>

<style lang="scss" scoped>
  .chart-manage {
    @include flex-row;
    @include flex-wrap;
  }
</style>
