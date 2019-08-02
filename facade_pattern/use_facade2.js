// 使用外观模式来封装多个功能，简化底层操作方法

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
    document.getElementById(id)[key] = value;
  },
  html(id, html) {
    document.getElementById(id).innerHTML = html;
  },
  on(id, type, fn) {
    document.getElementById(id)['on' + type] = fn;
  },
};
// 使用
A.g('text') // 获取id为text的元素