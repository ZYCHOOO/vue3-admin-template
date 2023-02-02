<template>
  <div :id="echartId" :style="chartStyle" />
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onBeforeMount, onMounted, defineProps, defineEmits } from 'vue'

const emits = defineEmits([])
const props = defineProps({
  chartStyle: {
    type: Object,
    default: () => ({
      width: '600px',
      height: '400px'
    })
  },
  chartOption: {
    type: Object,
    default: () => ({}),
    required: true
  }
})

const echartId = ref(null)

onBeforeMount(() => {
  echartId.value = `echarts-id-${parseInt(Math.random() * 1000000)}`
})

onMounted(() => {
  var echart = echarts.init(document.getElementById(echartId.value))
  echart.setOption(props.chartOption, {
    notMerge: true // 不和之前的 option 合并
  })
  window.addEventListener('resize', () => {
    echart.resize({
      animation: { duration: 300 }
    })
  })
})

</script>
