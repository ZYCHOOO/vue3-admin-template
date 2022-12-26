<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="scss" scoped>
.app-main {
  padding: 61px 20px 20px 20px;
  position: relative;
  min-height: calc(100vh - 50px);
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
