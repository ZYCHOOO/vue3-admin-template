<template>
  <div class="chart-container">
    <!-- 折线图 -->
    <chart-card title="折线图">
      <template v-slot:chart-body>
        <chart :chart-option="lineOption" />
      </template>
    </chart-card>
    <!-- 柱状图 -->
    <chart-card title="柱状图">
      <template v-slot:chart-body>
        <chart :chart-option="barOption" />
      </template>
    </chart-card>
    <!-- 环状图 -->
    <chart-card title="环状图">
      <template v-slot:chart-body>
        <chart :chart-option="ringOption" />
      </template>
    </chart-card>
    <!-- 饼状图 -->
    <chart-card title="饼状图">
      <template v-slot:chart-body>
        <chart :chart-option="pieOption" />
      </template>
    </chart-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartCard from '@/components/Chart/ChartCard'

const ringOption = ref(null)
const barOption = ref(null)
const lineOption = ref(null)
const pieOption = ref(null)

ringOption.value = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}

barOption.value = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

lineOption.value = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
}

pieOption.value = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

</script>

<style lang="scss" scoped>
  .chart-container {
    @include flex-row;
    @include flex-wrap;
  }
</style>
