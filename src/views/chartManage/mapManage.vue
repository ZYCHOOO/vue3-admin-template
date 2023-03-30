<template>
  <div class="bd-map" ref="BdMapRef" />
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { initBdMapScript } from '@/utils/map'
const BdMapRef = ref()
onMounted(() => {
  initBdMapScript().then(() => {
    init()
  })
})
// 初始化地图
const init = () => {
  const map = new BMap.Map(BdMapRef.value) // allmap必须和dom上的id一致

  // 初始化地图,设置中心点坐标和地图级别
  map.centerAndZoom('成都', 11)
  map.enableScrollWheelZoom(true)
}
</script>
<style lang='scss' scoped>
.bd-map {
  // 注意给dom宽高，不然地图不出来
  width: 100%;
  height: calc(100vh - 120px);
}
</style>
