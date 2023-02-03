<template>
  <div class="line-chart-container">
    <chart :chart-option="chartOption" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const category = []
let dottedBase = +new Date()
const lineData = []
const barData = []
for (let i = 0; i < 20; i++) {
  const date = new Date((dottedBase += 3600 * 24 * 1000))
  category.push(
    [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
  )
  const b = Math.random() * 200
  const d = Math.random() * 200
  barData.push(b)
  lineData.push(d + b)
}

const chartOption = ref(null)
chartOption.value = {

  // option
  backgroundColor: '#0f375f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['line', 'bar'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  series: [
    {
      name: 'line',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
    },
    {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        borderRadius: 5
      },
      data: barData
    },
    {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      z: -12,
      data: lineData
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        color: '#0f375f'
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }
  ]
}

</script>
