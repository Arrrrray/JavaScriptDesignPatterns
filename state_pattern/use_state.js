// 使用状态模式
// 状态模式的最终目的即是简化分支判断流程。
// 状态模式是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有分支。

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


  const edit_components = {
    image: (
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
    ),
    navi: (
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
    ),
    search: (
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
    ),
    topic: (
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
    ),
    brand: (
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
    ),
    video: (
      <EditVideoRow
        dispatch={dispatch}
        currentRow={currentRow}
        currentCol={currentCol}
        grid_id={grid_id}
        dataChange={dataChange}
        dataSave={dataSave}
        dataCancel={dataCancel}
        handleEventListenerKeyDown={handleEventListenerKeyDown}
      />
    ),
    swiper: (
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
    ),
    products: (
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
    ),
    space: (
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
    ),
    focus: (
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
    ),
    brandwall: (
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
    ),
  };
  return edit_components[currentRow.node_type] || null;
};