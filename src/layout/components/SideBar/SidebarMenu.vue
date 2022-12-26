<template>
  <el-menu
    :unique-opend="true"
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
    :text-color="$store.getters.cssVar.menuText"
    :background-color="$store.getters.cssVar.menuBg"
    :active-text-color="$store.getters.cssVar.activeMenuText"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem'
import { useRoute, useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'

const route = useRoute()
const router = useRouter()

const routes = computed(() => {
  const filteredRoutes = filterRoutes(router.getRoutes())
  return generateMenus(filteredRoutes)
})

// 默认激活项
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped></style>
