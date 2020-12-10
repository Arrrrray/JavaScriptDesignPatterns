/*
 * @Author: junchao
 * @Date: 2020-11-12 16:06:30
 * @LastEditTime: 2020-11-12 16:32:16
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/singleton_pattern/index2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

class Agency {
  constructor(subType, superType) {
    if (typeof Agency[superType] === 'function') {
      function F (){ };
      F.prototype = new Agency[superType];
      subType.constructor = subType;
      subType.prototype = new F();
    } else {
      throw new Error('抽象类不存在');
    }
  }
}

// 鼠标抽象类
Agency.mouseShop = function () {
  this.type = "鼠标";
}

Agency.mouseShop.prototype = {
  getName: function () {
    return new Error("抽象方法不能调用");
  }
}

// 键盘抽象类
Agency.keyboardShop = function () {
  this.type = "键盘";
}

Agency.keyboardShop.prototype = {
  getName: function () {
    return new Error("抽象方法不能调用");
  }
}

// 普通鼠标子类

class Mouse {
  constructor(name) {
    this.name = name;
    this.item = ["买我，我线长", "玩游戏贼溜"];
  }
}

// 抽象工厂实现鼠标类的继承
new Agency(Mouse,  "mouseShop");
// 子类中重写抽象方法
Mouse.prototype.getName = function(){
  return this.name;
}

// 普通键盘类
class Keyboard {
  constructor(name) {
    this.name = name;
    this.item = ["行，你买他吧", "没键盘看你咋玩"];
  }
}

// 抽象工厂实现键盘类的继承
new Agency(Keyboard, "keyboardShop");
// 子类中重写抽象方法
Keyboard.prototype.getName = function(){
  return this.name;
}

// 实例化鼠标

let mouseA = new Mouse("联想");
console.log(mouseA.type,mouseA.getName())