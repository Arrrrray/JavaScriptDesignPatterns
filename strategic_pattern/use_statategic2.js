/*
 * @Author: junchao
 * @Date: 2019-08-01 17:33:50
 * @LastEditTime: 2020-10-15 15:46:33
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/strategic_pattern/use_statategic2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 使用策略模式进行表单验证

// 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。
// 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。
// 策略模式中的代码可以复用。

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
