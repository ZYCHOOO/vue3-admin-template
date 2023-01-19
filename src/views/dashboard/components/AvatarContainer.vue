<template>
  <div class="avatar-container">
    <el-avatar :src="$store.getters.userInfo.avatar" class="avatar-img" :size="80" />
    <div class="avatar-greeting">您好！{{ $store.getters.userInfo.username }}</div>
    <div class="avatar-datetime">{{ dateTime }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const dateTime = ref(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))

setInterval(() => {
  dateTime.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}, 1000)

</script>

<style lang="scss" scoped>

</style>
