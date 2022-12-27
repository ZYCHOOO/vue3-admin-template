<template>
  <el-pagination
    :small="small"
    :background="background"
    :total="pagination.total"
    :layout="pagination.layout"
    :page-size="pagination.pageSize"
    :current-page="pagination.pageNum"
    :page-sizes="pagination.pageSizes"
    :pager-count="pagination?.pagerCount || 7"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  small: { type: Boolean, default: false },
  background: { type: Boolean, default: true },
  pagination: { type: Object, required: true },
  hideOnSinglePage: { type: Boolean, default: false }
})

const emits = defineEmits(['size-change', 'limit-change'])

// 每页条数变化
const handleSizeChange = (size) => {
  emits('size-change', size)
}
// 当前页数变化
const handleCurrentChange = (page) => {
  emits('page-change', page)
}
</script>

<style lang="scss" scoped></style>
