<template>
  <div class="navbar">
    <hamburger class="hamburger" />
    <bread-crumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 功能引导 -->
      <guide class="right-menu-item hover-effect" />
      <!-- 全屏切换 -->
      <screen-full class="right-menu-item hover-effect" />
      <!-- 切换主题 -->
      <theme-select class="right-menu-item hover-effect" />
      <!-- 切换语言 -->
      <lang-select class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          />
          <el-icon>
            <tools />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <a target="_blank" href="#">
              <el-dropdown-item>个人资料</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Guide from '@/components/Guide/index'
import Hamburger from '@/components/Hamburger/index'
import ScreenFull from '@/components/ScreenFull/index'
import ThemeSelect from '@/components/ThemeSelect/index'
import LangSelect from '@/components/LangSelect/index'
import BreadCrumb from '@/components/BreadCrumb/index'

const store = useStore()

const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navbarHeight;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    padding-right: 16px;
    display: flex;
    align-items: center;
    float: right;

    :deep .right-menu-item {
      padding: 0 18px 0 0;
      display: inline-block;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    :deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        @include flex-align-center;
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
