<template>
  <div>
    <el-tooltip :content="$t('navBar.guide')">
      <svg-icon id="guide-start" icon="guide" @click="handleGuide" />
    </el-tooltip>
  </div>
</template>

<script setup>
import steps from './steps'
import { onMounted } from 'vue'
import Driver from 'driver.js'
import { useI18n } from 'vue-i18n'
import 'driver.js/dist/driver.min.css'

let driver
const i18n = useI18n()

onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙板关闭
    allClose: false,
    closeBtnText: i18n.t('guide.close'),
    nextBtnText: i18n.t('guide.next'),
    prevBtnText: i18n.t('guide.prev')
  })
})

const handleGuide = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>
