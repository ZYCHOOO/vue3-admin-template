import { ref } from 'vue'
export const tableOperationHook = (emits) => {
  const table = ref(null)
  const handleSizeChange = (size) => {
    emits('size-change', size)
  }

  const handlePageChange = (page) => {
    emits('page-change', page)
  }

  const select = (selection, row) => {
    emits('select', selection, row)
  }

  const selectAll = (selection) => {
    emits('select-all', selection)
  }

  const selectionChange = (selection) => {
    emits('selection-change', selection)
  }

  const clearSelection = () => {
    table.value.clearSelection()
  }

  const clearFilter = (columnkey) => {
    table.value.clearFilter(columnkey)
  }

  const doLayout = () => {
    table.value.doLayout()
  }

  const onRowClick = (val) => {
    table.value.toggleRowSelection(val)
  }

  return {
    select,
    selectAll,
    selectionChange,
    clearSelection,
    handleSizeChange,
    handlePageChange,
    clearFilter,
    doLayout,
    onRowClick
  }
}
