// 使用策略模式进行表单验证

// 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。
// 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。
// 策略模式中的代码可以复用。

// 表单验证
let InputStrategy = function () {
  let strategy = {
    // 是否为空
    notNull(value) {
      return /\s+/.test(value) ? '请输入内容' : '';
    },
    // 是否为一个数字
    number(value) {
      return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
    },
    // 是否是本地电话
    phone(value) {
      return /^\d{3}\-\d{8}$|^\d{4}\-\d{8}$/.test(value) ? '' : '请输入正确的电话号码';
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
};

// 拓展 可以延伸算法
InputStrategy.addStrategy('nickname', function (value) {
  return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入一个4-8位昵称';
});

// 外观模式简化元素的获取
function $tag(tag, context) {
  context = context || document;
  return context.getElementByTagName(tag);
}

// 提交按钮点击
$tag('input')[1].onclick = function () {
  let value = $tag('input')[0].value;
  // 获取昵称验证结果
  $tag('span')[0].innerHTML = InputStrategy.check('nickname', value);
};