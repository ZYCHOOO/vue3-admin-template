<template>
  <div class="permission-list">
    <tree-table
      default-expand-all
      :tree-props="treeProps"
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-loading="tableLoading"
    />
  </div>
</template>

<script setup>
import {} from 'vue'
import { commonTable } from '@/hooks/commonTable'
import { getPermissionList } from '@/api/userManage'
import { PERMISSION_LIST_COLUMNS } from '@/constant/tableColumns'

const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  commonTable()

tableColumns.value = PERMISSION_LIST_COLUMNS

const getPermissionData = async () => {
  try {
    tableLoading.value = true
    const res = await getPermissionList()
    tableData.value = res.data
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getPermissionData)

</script>

<style lang="scss" scoped>

</style>
