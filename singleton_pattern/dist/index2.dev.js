"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: junchao
 * @Date: 2020-11-12 16:06:30
 * @LastEditTime: 2020-11-12 16:32:16
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/singleton_pattern/index2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
var Agency = function Agency(subType, superType) {
  _classCallCheck(this, Agency);

  if (typeof Agency[superType] === 'function') {
    var F = function F() {};

    ;
    F.prototype = new Agency[superType]();
    subType.constructor = subType;
    subType.prototype = new F();
  } else {
    throw new Error('抽象类不存在');
  }
}; // 鼠标抽象类


Agency.mouseShop = function () {
  this.type = "鼠标";
};

Agency.mouseShop.prototype = {
  getName: function getName() {
    return new Error("抽象方法不能调用");
  }
}; // 键盘抽象类

Agency.keyboardShop = function () {
  this.type = "键盘";
};

Agency.keyboardShop.prototype = {
  getName: function getName() {
    return new Error("抽象方法不能调用");
  }
}; // 普通鼠标子类

var Mouse = function Mouse(name) {
  _classCallCheck(this, Mouse);

  this.name = name;
  this.item = ["买我，我线长", "玩游戏贼溜"];
}; // 抽象工厂实现鼠标类的继承


new Agency(Mouse, "mouseShop"); // 子类中重写抽象方法

Mouse.prototype.getName = function () {
  return this.name;
}; // 普通键盘类


var Keyboard = function Keyboard(name) {
  _classCallCheck(this, Keyboard);

  this.name = name;
  this.item = ["行，你买他吧", "没键盘看你咋玩"];
}; // 抽象工厂实现键盘类的继承


new Agency(Keyboard, "keyboardShop"); // 子类中重写抽象方法

Keyboard.prototype.getName = function () {
  return this.name;
}; // 实例化鼠标


var mouseA = new Mouse("联想");
console.log(mouseA.type, mouseA.getName());