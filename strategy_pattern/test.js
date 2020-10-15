/*
 * @Author: junchao
 * @Date: 2020-10-15 16:13:18
 * @LastEditTime: 2020-10-15 16:14:51
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/strategy_model/test.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  say() {
    return "Hello, " + this.name + "!";
  }
}

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal)
    && kitty 
    && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say)
{
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
