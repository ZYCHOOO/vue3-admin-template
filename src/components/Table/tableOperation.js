export const tableOperationHook = (emits, tableRef) => {
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
    tableRef.value.clearSelection()
  }

  const clearFilter = (columnkey) => {
    tableRef.value.clearFilter(columnkey)
  }

  const doLayout = () => {
    tableRef.value.doLayout()
  }

  const onRowClick = (val) => {
    tableRef.value.toggleRowSelection(val)
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
