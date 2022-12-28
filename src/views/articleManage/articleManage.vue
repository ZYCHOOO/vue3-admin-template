<template>
  <div class="article-manage">
    <list-table
      show-index
      pagination-position="center"
      :index-width="80"
      :formatter="formatter"
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-loading="tableLoading"
      :pagination-config="paginationConfig"
    >
      <template #operate="{ row }">
        <el-button type="primary">查 看</el-button>
        <el-button type="danger">删 除</el-button>
      </template>
    </list-table>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { commonTable } from '@/hooks/commonTable'
import { getArticleList } from '@/api/articleManage'
import { ARTICLE_LIST_COLUMNS } from '@/constant/tableColumns'

const { proxy } = getCurrentInstance()
const { tableData, tableLoading, tableColumns, paginationConfig, getData } = commonTable()

tableColumns.value = ARTICLE_LIST_COLUMNS

const formatter = (row, column, cellValue, index) => {
  const rowKey = column.property
  if (rowKey === 'openTime') {
    return proxy.$filters.dateTimeFilter(row[rowKey])
  } else {
    return row[rowKey] || '--'
  }
}

const getArticleData = async () => {
  try {
    tableLoading.value = true
    const res = await getArticleList()
    console.log('sss', res)
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getArticleData)
</script>

<style lang="scss" scoped>
  .article-manage {
    @include list;
  }
</style>
