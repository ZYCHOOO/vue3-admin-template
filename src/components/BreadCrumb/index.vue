<template>
  <el-breadcrumb seperator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadCrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span v-if="index === breadCrumbData.length - 1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}
        </span>
        <!-- 可点击项 -->
        <span v-else class="redirect" @click="handleLink(item)">
          {{ generateTitle(item.meta.title) }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { generateTitle } from '@/utils/i18n'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

// 将来需要主题替换，所以 hover 的颜色我们设置为主色
const linkHoverColor = ref(store.getters.cssVar.menuBg)

// 生成数组数据
const breadCrumbData = ref([])
const getBreadCrumbData = () => {
  // 当前路由路由表
  breadCrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

// 监听路由变化
watch(
  route,
  () => {
    getBreadCrumbData()
  },
  {
    immediate: true
  }
)

const handleLink = (item) => {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 50px;

  .redirect {
    font-weight: 600;
    cursor: pointer;
    color: #666;

    &:hover {
      color: v-bind(linkHoverColor);
    }
  }

  :deep .no-redirect {
    cursor: text;
    color: #97a8be;
  }
}
</style>
