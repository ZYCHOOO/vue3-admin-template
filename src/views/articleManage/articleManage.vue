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
        <el-button type="primary" @click="handleDetail(row.id)">{{ $t('btn.check') }}</el-button>
        <el-button type="danger">{{ $t('btn.delete') }}</el-button>
      </template>
    </list-table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'
import { commonTable } from '@/hooks/commonTable'
import { getArticleList } from '@/api/articleManage'
import { getTableColumns } from '@/constant/tableColumns'

const router = useRouter()
const { proxy } = getCurrentInstance()
const { tableData, tableLoading, tableColumns, paginationConfig, getData } = commonTable()

tableColumns.value = getTableColumns('ARTICLE_LIST_COLUMNS')

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
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

const handleDetail = (id) => {
  router.push(`/article-detail/${id}`)
}

getData(1, 10, getArticleData)

watchSwitchLang(
  () => { getData(1, 10, getArticleData) },
  () => { tableColumns.value = getTableColumns('ARTICLE_LIST_COLUMNS') }
)
</script>

<style lang="scss" scoped>
  .article-manage {
    @include list;
  }
</style>
