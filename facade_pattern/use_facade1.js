// 使用外观模式，简化底层接口复杂性，解决浏览器兼容性问题

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