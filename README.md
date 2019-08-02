# JavaScriptDesignPatterns
# 1.外观模式

外观模式（facade）：为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易。

## 1.简化底层接口复杂性，解决浏览器兼容性问题

```
// 外观模式实现
function addEvent(dom, type, fn) {
  // 对于支持dom2级事件处理程序 addEventListener方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  }
  // 对于支持 attachEvent 方法的浏览器
  else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  }
  // 对于支持 on + 事件名的浏览器
  else {
    dom['on' + type] = fn;
  }
}
```

## 2.很多代码库通过外观模式来封装多个功能，简化底层操作方法

```
const A = {
  // 通过ID获取元素
  g(id) {
    return document.getElementById(id);
  },
  // 设置元素css属性
  css(id, key, value) {
    document.getElementById(id).style[key] = value;
  },
  // 设置元素的属性
  attr(id, key, value) {
    document.getElementBuId(id)[key] = value;
  },
  html(id, html) {
    document.getElementBuId(id).innerHTML = html;
  },
  on(id, type, fn) {
    document.getElementById(id)['on' + type] = fn;
  },
};
// 使用
A.g('text') // 获取id为text的元素

```
# 2.状态模式

状态模式主要解决的是当控制一个对象状态转换的条件表达式过于复杂时的情况，把状态的判断逻辑转移到表示不同状态的一系列类当中。

需求：GP大页显示所有行信息中，根据不同的node_type显示不同的行

## 1.不使用状态模式

```
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
```

## 2.使用状态模式

```
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
```

## 3.优点：

1. 状态模式的最终目的即是简化分支判断流程。
2. 状态模式是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有分支。

# 3.策略模式

定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

举例：

## 1.价格计算：

```
  // 价格策略对象
let PriceStrategy = function () {
  // 内部算法对象
  let strategy = {
    // 100 返 30
    return30(price) {
      return +price + parseInt(price / 100) * 30;
    },
    // 100 返 50
    return50(price) {
      return +price + parseInt(price / 100) * 50;
    },
    // 9折
    percent90(price) {
      return price * 100 * 90 / 10000;
    },
    // 8 折
    percent80(price) {
      return price * 100 * 80 / 10000;
    },
    // 5 折
    percent50(price) {
      return price * 100 * 50 / 10000;
    },
  };

  // 策略算法调用接口
  return function (algorithm, price) {
    // 如果算法存在，则调用算法，否则返回false
    return strategy[algorithm] && strategy[algorithm](price);
  };
}();

// 使用
let price = PriceStrategy('percent50', '350');
console.log(price); // 175
```

## 2.表单验证

```
// 表单验证
const InputStrategy = (function () {
  let strategy = {
    // 是否为一个数字
    number(value) {
      return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '校验通过' : '校验不通过：请输入数字';
    },
    // 是否是手机号
    phone(value) {
      return /^1\d{10}$/.test(value) ? '校验通过' : '校验不通过：请输入正确的手机号码';
    },
  };

  return {
    // 验证接口
    check(type, value) {
      // 去除首尾空格
      value = value.replace(/^\s+|\s+$/g, '');
      return strategy[type] ? strategy[type](value) : '没有该类型的检测方法';
    },
    // 添加策略 
    addStrategy(type, fn) {
      strategy[type] = fn;
    },
  };
})();

// 拓展 可以延伸算法
InputStrategy.addStrategy('nickname', function (value) {
  return /^[a-zA-Z]\w{3,7}$/.test(value) ? '校验通过' : '校验不通过：请输入一个4-8位昵称';
});
console.log('校验昵称:', InputStrategy.check('nickname', 'value'))
console.log('校验是否是数字:', InputStrategy.check('number', 'aaaa'))
console.log('校验是否是手机号:', InputStrategy.check('phone', '13112345678'))

```

## 3.优点：

1. 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。
2. 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。
3. 策略模式中的代码可以复用。



# 4.观察者模式

一个对象（称为subject）维持一系列依赖于它（观察者）的对象，将有关状态的任何变更自动通知给它们。
当一个特目标需要告诉观察者发生了什么有趣的事情，它会向观察者广播一个通知（可以暴扣与通知主题相关的特定数据）。
当我们不再希望某个特定的观察者获得其注册目标发出的改变通知时，该目标可以将它从观察者列表中删除。

# 5.Observer（观察者）模式和Publish/Subscribe（发布/订阅）模式的区别

Observer（观察者）模式要求希望接收到主题通知的观察者（或对象）必须订阅内容改变的事件。
Publish/Subscribe（发布/订阅）模式使用了一个主题/事件通道，这个通道介于希望接收到通知（订阅者）的对象和激活事件的对象（发布者）之间。该事件系统允许代码定义应用程序的特定事件，这些时间可以传递自定义参数，自定义参数包含订阅者所需的值。其目的时避免订阅者和发布者之间产生依赖关系。
这与Observer（观察者）模式不同，因为它允许订阅者执行适当的事件处理程序来注册和接受发布者发出的通知。

![图片](https://uploader.shimo.im/f/M4e0dhziCiY0OCSv.png!thumbnail)

## 1.事件中心：

```
  // 行、列数据有变化时的回调函数
  handleRowColDataChange = data => {
   ...
   if (data.type === 'col') {
      dispatch({
        type: 'gorgeousEditNew/colDataChangeReducer',
        payload: data,
      });
      return;
    }
    // 实时修改行列数据
    dispatch({
      type: 'gorgeousEditNew/rowDataChangeReducer',
      payload: data,
    });
    ...
  };
  
  // 行、列数据保存函数
  handleRowColSave = () => {
   ...
   dispatch({
      type: 'gorgeousEditNew/saveRowData',
      payload: {
        currentRow,
        currentCol,
      },
    });
  };
  
// 行、列数据取消保存数据
  handleRowColCancel = () => {
    ...
    dispatch({
      type: 'gorgeousEditNew/cancelRowColDataReducer',
    });
    ...
  };
```

## 2.发布者：

```
  dataChange = data => {
    this.props.dataChange(data);
  };

  // 选择模板回调函数
  TempleteSelectedChange = params => {
    this.dataChange({
      display_type: params,
    });
  };

  // 开始结束时间选择回调函数
  handlerTimeSelecteddChange = params => {
    this.dataChange({
      start_time: params.start_time,
      end_time: params.end_time,
    });
  };

  // 背景色变化函数
  handleColorChange = (isCustomColor, color) => {
    this.dataChange({ isCustomColor: isCustomColor, background_color: color });
  };

  // 模块名称变化
  handlerNameChange = params => {
    this.dataChange({
      name: params.name,
    });
  };
  
  // 保存修改信息
  SaveChange = () => {
    this.props.dataSave();
  };

  // 取消保存
  CancelChange = () => {
    this.props.dataCancel();
  }
```

## 3.订阅者：

```
    // 编辑当前行 - 编辑行时，实时改变数据
    rowDataChangeReducer(state, { payload }) {
      ...
    },
    // 编辑当前列 - 编辑列时，实时改变数据
    colDataChangeReducer(state, { payload }) {
      ...
    },
    
    // 编辑行、列后保存数据
    saveRowColDataReducer(state, { payload }) {
     ...
    },
    
    // 编辑行、列后取消保存数据
    cancelRowColDataReducer(state, { payload }) {
     ...
    },
```

# 6.代理模式

## 1.使用虚拟代理实现图片的预加载

在网页开发中，图片的预加载是一种比较常用的技术，如果直接给img标签节点设置src属性的话，如果图片比较大的话，或者网速相对比较慢的话，那么在图片未加载完之前，图片会有一段时间是空白的场景，这样对于用户体验来讲并不好，那么这个时候我们可以在图片未加载完之前我们可以使用一个 loading加载图片来作为一个占位符，来提示用户该图片正在加载，等图片加载完后我们可以对该图片直接进行赋值即可；下面我们先不用代理模式来实现图片的预加载的情况下代码如下：

第一种方案：不使用代理的预加载图片函数如下

```
// 不使用代理的预加载图片函数如下
var myImage = (function(){
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    var img = new Image();
    img.onload = function(){
        imgNode.src = this.src;
    };
    return {
        setSrc: function(src) {
            imgNode.src = "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";
            img.src = src;
        }
    }
})();
// 调用方式
myImage.setSrc("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");
```

如上代码是不使用代理模式来实现的代码；

第二种方案：使用代理模式来编写预加载图片的代码如下：

```
var myImage = (function(){
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();
// 代理模式
var ProxyImage = (function(){
    var img = new Image();
    img.onload = function(){
        myImage.setSrc(this.src);
    };
    return {
        setSrc: function(src) {
                         myImage.setSrc("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
        img.src = src;
        }
    }
})();
// 调用方式
ProxyImage.setSrc("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");
```

第一种方案是使用一般的编码方式实现图片的预加载技术，首先创建imgNode元素，然后调用myImage.setSrc该方法的时候，先给图片一个预加载图片，当图片加载完的时候，再给img元素赋值，第二种方案是使用代理模式来实现的，myImage 函数只负责创建img元素，代理函数ProxyImage 负责给图片设置loading图片，当图片真正加载完后的话，调用myImage中的myImage.setSrc方法设置图片的路径；他们之间的优缺点如下：

第一种方案一般的方法代码的耦合性太高，一个函数内负责做了几件事情，比如创建img元素，和实现给未加载图片完成之前设置loading加载状态等多项事情，未满足面向对象设计原则中单一职责原则；并且当某个时候不需要代理的时候，需要从myImage 函数内把代码删掉，这样代码耦合性太高。

第二种方案使用代理模式，其中myImage 函数只负责做一件事，创建img元素加入到页面中，其中的加载loading图片交给代理函数ProxyImage 去做，当图片加载成功后，代理函数ProxyImage 会通知及执行myImage 函数的方法，同时当以后不需要代理对象的话，我们直接可以调用本体对象的方法即可；

从上面代理模式我们可以看到，代理模式和本体对象中有相同的方法setSrc,这样设置的话有如下2个优点：

1. 用户可以放心地请求代理，他们只关心是否能得到想要的结果。假如我门不需要代理对象的话，直接可以换成本体对象调用该方法即可。
2. 在任何使用本体对象的地方都可以替换成使用代理。

当然如果代理对象和本体对象都返回一个匿名函数的话，那么也可以认为他们也具有一直的接口；比如如下代码：

```
var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return function (src) {
    imgNode.src = src;
  }
})();
// 代理模式
var ProxyImage = (function () {
  var img = new Image();
  img.onload = function () {
    myImage(this.src);
  };
  return function (src) {
    myImage("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
    img.src = src;
  }
})();
// 调用方式
ProxyImage("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");
```

# 参考文档

[语雀-麻雀前端知识库-设计模式](https://www.yuque.com/minghua/sparrow-frontend/state)

[掘金-详解 Javascript十大常用设计模式](https://juejin.im/entry/58c280b1da2f600d8725b887)

[JavaScript设计模式](https://booksea.app/archives/learning-javascript-design-patterns.html)

