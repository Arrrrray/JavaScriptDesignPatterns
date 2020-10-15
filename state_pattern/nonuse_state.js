// 不使用状态模式

showComponent = () => {
  let {
    currentRow,
    currentCol,
    dispatch,
    grid_id,
    dataChange,
    dataSave,
    dataCancel,
    handleEventListenerKeyDown,
  } = this.props;
  if (currentRow.node_type === 'image') {
    return (
      <EditImageRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'navi') {
    return (
      <EditNagivationRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'search') {
    return (
      <EditSearchRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'topic') {
    return (
      <EditTopicRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'brand') {
    return (
      <EditBrandRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'swiper') {
    return (
      <EditSwiperRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'products') {
    return (
      <EditProductsRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'space') {
    return (
      <EditSpaceRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'focus') {
    return (
      <EditFocusRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else if (currentRow.node_type === 'brandwall') {
    return (
      <EditBrandWall
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    )
  } else {
    return null;
  }
};