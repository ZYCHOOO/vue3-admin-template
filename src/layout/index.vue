<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'open-sidebar' : 'hide-sidebar']"
  >
    <!-- 左侧menu -->
    <side-bar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部navbar -->
        <nav-bar />
        <tags-view />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import SideBar from './components/SideBar/index'
import TagsView from '@/components/TagsView/index'
import variables from '@/styles/variables.scss'
import {} from 'vue'

</script>

<style lang="scss" scoped>
  .app-wrapper {
    @include clearfix;
    @include relative;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - $sideBarWidth);
    z-index: 9;
    transition: width $sidebarDuration;
  }
  .hide-sidebar .fixed-header {
    width: calc(100% - $hiddenSideBarWidth);
  }
</style>
