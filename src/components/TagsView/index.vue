<template>
  <div id="guide-tag" class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) in $store.getters.tagViewList"
        :key="tag.fullPath"
        class="tags-view-item"
        :class="isActive(tag) ? 'tags-view-item--active' : ''"
        :to="{ path: tag.fullPath }"
        @contextmenu.prevent="openMenu($event, index)"
      >
        {{ tag.title }}
        <el-icon
          v-show="!isActive(tag)"
          @click.prevent.stop="removeCurrentTag(index)"
        >
          <CircleClose />
        </el-icon>
      </router-link>

      <context-menu
        v-show="visible"
        v-click-outside="closeMenu"
        :style="menuStyle"
        :index="selectIndex"
        @close-menu="closeMenu"
      />
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ContextMenu from './ContextMenu'

const tagHook = () => {
  const route = useRoute()
  const store = useStore()

  const activeColor = ref(store.getters.cssVar.menuBg)

  const isActive = (tag) => {
    return tag.path === route.path
  }

  const removeCurrentTag = (index) => {
    store.commit('app/removeTagView', { type: 'index', index })
  }
  return { activeColor, isActive, removeCurrentTag }
}

const menuHook = () => {
  const visible = ref(false)
  const selectIndex = ref()
  const menuStyle = ref({ left: 0, top: 0 })

  // 鼠标右键打开 context-menu
  const openMenu = (e, index) => {
    const { x, y } = e
    menuStyle.value.left = `${x}px`
    menuStyle.value.top = `${y}px`
    selectIndex.value = index
    visible.value = true
  }

  // 关闭 context-menu
  const closeMenu = () => {
    visible.value = false
  }

  return { visible, selectIndex, menuStyle, openMenu, closeMenu }
}

const { activeColor, isActive, removeCurrentTag } = tagHook()
const { visible, selectIndex, menuStyle, openMenu, closeMenu } = menuHook()
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &--active {
        border: 1px solid v-bind(activeColor);
        background: v-bind(activeColor);
        color: #fff;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 4px;

          filter: grayscale(100%);
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          -ms-filter: grayscale(100%);
          -o-filter: grayscale(100%);
          filter: url('data:image/svg+xml;utf8,#grayscale');
          filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
          -webkit-filter: grayscale(1);
        }
      }
      // close 按钮
      .el-icon-close {
        width: 16px;
        height: 16px;
        line-height: 10px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
}
</style>
