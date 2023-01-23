<template>
  <div class="article-create">
    <el-input v-model="title" placeholder="请输入标题" />

    <el-tabs v-model="activeName" class="article-create-tabs">
      <el-tab-pane label="markdown 编辑器" name="markdown">
        <markdown />
      </el-tab-pane>
      <el-tab-pane label="富文本编辑器" name="editor">
        <editor v-model="content" />
      </el-tab-pane>
    </el-tabs>

    <div class="article-create-footer">
      <el-button type="primary" class="submit-btn" @click="test">{{ $t('btn.submit') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref()
const content = ref('')
const activeName = ref('markdown')

const test = () => {
  console.log(content.value, '12312312')
}

</script>

<style lang="scss" scoped>
  .article-create {
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .12) 0 0 12px 0;

    &-footer {
      @include flex-justify-center;
      margin-top: 20px;
    }

  }
</style>
