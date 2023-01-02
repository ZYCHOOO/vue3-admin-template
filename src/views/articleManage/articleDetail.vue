<template>
  <div class="article-detail">
    <div class="article-detail-title">{{ articleDetail.title }}</div>
    <div class="article-detail-info">
      <div class="article-detail-time">{{ articleDetail.publishDate }}</div>
      <div class="article-detail-author">{{ articleDetail.author }}</div>
    </div>
    <div class="article-detail-content" v-html="articleDetail.content" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDetail } from '@/api/articleManage'

const articleDetail = ref({})
const route = useRoute()

const articleId = computed(() => {
  return route.params.id
})

const getArticle = async () => {
  const res = await getArticleDetail({ id: articleId.value })
  articleDetail.value = res
}

getArticle()
</script>

<style lang="scss" scoped>

</style>
