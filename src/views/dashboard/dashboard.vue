<template>
  <div class="dashboard-container">
    <!-- 信息 -->
    <avatar-container />
    <!-- 文章 -->
    <article-container />
    <!-- 图表 -->
    <chart-container />
  </div>
</template>

<script setup>
import AvatarContainer from './components/AvatarContainer'
import ArticleContainer from './components/ArticleContainer'
import ChartContainer from './components/ChartContainer'

</script>

<style lang="scss" scoped>
  @mixin container-layout {
    background: #FFF;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    border-radius: 2px;
  }
  .dashboard-container {
    @include flex-wrap;
  }
  .avatar-container, .article-container, .chart-container {
    @include container-layout;
    @include flex-column;
  }
  .avatar-container, .article-container {
    width: calc(50% - $marginGap / 2);
  }
  .avatar-container {
    @include flex-center;
  }
  .article-container {
    margin-left: $marginGap;
  }
  .chart-container {
    margin-top: $marginGap;
    width: 100%;
  }
</style>
