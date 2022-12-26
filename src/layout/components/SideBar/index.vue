<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="@/assets/logo.png"
      />
      <h1 v-if="$store.getters.sidebarOpened" class="logo-title">
        vue3 admin
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'

const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  @include flex-center;
  padding: 10px 0 22px 0;
  height: v-binf(logoHeight) + 'px';
  .logo-title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    white-space: nowrap;
    color: #fff;
  }
}
</style>
