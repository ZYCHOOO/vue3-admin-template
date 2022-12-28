<template>
  <div class="role-list">
    <list-table
      show-index
      :index-width="80"
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-loading="tableLoading"
      :pagination-config="paginationConfig"
    >
      <template #operate="{ row }">
        <el-button type="primary">分配权限</el-button>
      </template>
    </list-table>
  </div>
</template>

<script setup>
import { getRoleList } from '@/api/userManage'
import { commonTable } from '@/hooks/commonTable'
import { ROLE_LIST_COLUMNS } from '@/constant/tableColumns'

const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  commonTable()

tableColumns.value = ROLE_LIST_COLUMNS

const getRoleData = async () => {
  try {
    tableLoading.value = true
    const res = await getRoleList()
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getRoleData)

</script>

<style lang="scss" scoped>
  .role-list {
    @include list;
  }
</style>
