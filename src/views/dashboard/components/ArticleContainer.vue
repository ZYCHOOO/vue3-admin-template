<template>
  <div class="article-container">
    <div
      v-for="article in topArticle"
      :key="article.id"
      class="article-item"
    >
      <div class="article-item-title">{{ article.title }}</div>
      <div class="article-item-time">{{ article.publishDate }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getArticleList } from '@/api/articleManage'

const articleData = ref([])
const topArticle = computed(() => {
  return articleData.value.filter((item, i) => i <= 3)
})

const getArticleData = async () => {
  const res = await getArticleList()
  articleData.value = res.data
}

getArticleData()

</script>

<style lang="scss" scoped>
  .article-container {
    padding: 10px;
  }
  .article-item {
    @include flex-row;
    @include flex-align-center;
    border-bottom: 1px solid rgba(149, 154, 172, 0.2);
    &-title {
      @include single-ling-ellipsis;
      width: 70%;
      color: #4685FF;
      cursor: pointer;
    }
    &-time {
      margin-left: auto;
    }
  }
</style>
