<template>
  <div class="app-main">
    <!-- 带有切换动画，并且具备组件缓存 -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { isTags } from '@/utils/tags'
import { useRoute } from 'vue-router'
import { watchSwitchLang, generateTitle } from '@/utils/i18n'

const route = useRoute()
const store = useStore()

const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    const routeArr = route.path.split('/')
    title = routeArr[routeArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
    // title = route.meta.title
  }
  return title
}

watch(
  route,
  (to, from) => {
    // 并不是所有路由都保存
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('app/addTagViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)

watchSwitchLang(() => {
  store.getters.tagViewList.forEach((route, index) => {
    store.commit('app/changeTagView', {
      index,
      tag: { ...route, title: getTitle(route) }
    })
  })
})
</script>

<style lang="scss" scoped>
.app-main {
  padding: 104px 20px 20px 20px;
  position: relative;
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
