<template>
  <div class="list-table">
    <!-- 表格-按钮组 -->
    <div v-if="$slots['table-header']" class="table-list__header">
      <slot name="table-header" />
    </div>
    <!-- 表格-数据展示 -->
    <div class="list-table-content">
      <el-table
        ref="listTable"
        :border="border"
        :stripe="stripe"
        :data="tableData"
        v-loading="tableLoading"
        @select="select"
        @select-all="selectAll"
        @row-click="onRowClick"
        @selection-change="selectionChange"
      >
        <!-- 是否有多选 -->
        <el-table-column
          v-if="showSelection"
          type="selection"
          align="center"
          reserve-selection
          :width="selectionWidth"
          :selectable="checkSelectable"
        />
        <!-- 是否有序号 -->
        <el-table-column
          v-if="showIndex"
          label="序号"
          type="index"
          :width="indexWidth"
          :index="customIndex"
        />
        <template v-for="(col, index) in tableColumns" :key="index">
          <!-- 普通列 -->
          <el-table-column
            v-if="!col.slot"
            :prop="col.key"
            :fixed="col.fixed"
            :label="col.label"
            :width="col.width"
            :min-width="col.minWidth"
            :align="col.align"
            :sortable="col.sortable"
            :column-key="col.columnKey"
            :formatter="formatter"
            :show-overflow-tooltip="true"
            :render-header="renderHeader"
          />
          <!-- 操作列/自定义列 -->
          <el-table-column
            v-else
            :prop="col.key"
            :fixed="col.fixed"
            :label="col.label"
            :width="col.width"
            :min-width="col.minWidth"
            :align="col.align"
            :sortable="col.sortable"
            :column-key="col.columnKey"
            :show-overflow-tooltip="true"
            :render-header="renderHeader"
          >
            <template #default="scope">
              <slot :name="col.slot" :row="scope.row" />
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <!-- 列表表格-底部 -->
    <div v-if="paginationConfig" class="list-table-footer">
      <pagination
        :style="footerStyle"
        :pagination="paginationConfig"
        @size-change="handleSizeChange"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import variables from '@/styles/variables.scss'
import Pagination from '@/components/Pagination/index'
import { tableConfigHook } from '../tableConfig'
import { tableOperationHook } from '../tableOperation'

const props = defineProps({
  tableLoading: { type: Boolean },
  paginationConfig: { type: Object },
  indexWidth: { type: Number, default: 50 },
  stripe: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  tableData: { type: Array, required: true },
  showIndex: { type: Boolean, default: false },
  tableColumns: { type: Array, required: true },
  selectionWidth: { type: Number, default: 50 },
  renderHeader: { type: Function, default: null },
  showSelection: { type: Boolean, default: false },
  searchParams: { type: Object, default: () => {} },
  paginationPosition: {
    type: String,
    default: 'center',
    validator: (value) => {
      return ['left', 'center', 'right'].indexOf(value) !== -1
    }
  },
  formatter: {
    type: Function,
    default: (row, column, cellValue, index) => {
      const rowKey = column.property
      return row[rowKey] || '--'
    }
  },
  checkSelectable: {
    type: Function,
    default: () => {
      return true
    }
  }
})

const listTable = ref(null)
const emits = defineEmits([
  'select',
  'select-all',
  'selection-chang',
  'size-change',
  'page-change'
])

const { customIndex, footerStyle } = tableConfigHook(props)
const {
  select,
  selectAll,
  selectionChange,
  clearSelection,
  handleSizeChange,
  handlePageChange,
  clearFilter,
  doLayout,
  onRowClick
} = tableOperationHook(emits, listTable)
</script>

<style lang="scss" scoped>
@import '~@/styles/components/list-table.scss';
</style>
