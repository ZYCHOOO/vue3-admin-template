<template>
  <div class="user-list">
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
      <template #avatar="{ row }">
        <img :src="row.avatar" alt="" class="user-manage-avatar" />
      </template>
      <template #role="{ row }">
        <el-tag v-for="item in row.role" :key="item.id">{{
          item.title
        }}</el-tag>
      </template>
      <template #operate="{ row }">
        <el-button type="primary">{{ $t('btn.check') }}</el-button>
        <el-button type="default" @click="handleRole(row.id)">{{
          $t('btn.role')
        }}</el-button>
        <el-button type="danger">{{ $t('btn.delete') }}</el-button>
      </template>
    </list-table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'
import { getUserManageList } from '@/api/userManage'
import { commonTable } from '@/hooks/commonTable'
import { USER_MANAGE_COLUMNS } from '@/constant/tableColumns'
import { getLanguage } from '@/i18n/index'

console.log('1111', getLanguage())

const router = useRouter()
const { proxy } = getCurrentInstance()
const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  commonTable()

tableColumns.value = USER_MANAGE_COLUMNS

const formatter = (row, column, cellValue, index) => {
  const rowKey = column.property
  if (rowKey === 'openTime') {
    return proxy.$filters.dateTimeFilter(row[rowKey])
  } else {
    return row[rowKey] || '--'
  }
}

// 获取用户数据列表
const getUserManageData = async () => {
  try {
    tableLoading.value = true
    const res = await getUserManageList()
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getUserManageData)
</script>

<style lang="scss" scoped>
.user-list {
  @include list;
  .user-manage {
    &-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    &-header {
      @include flex-row;
      justify-content: flex-end;
    }
  }
}
</style>
