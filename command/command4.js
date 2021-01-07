/*
 * @Author: junchao
 * @Date: 2021-01-07 13:41:11
 * @LastEditTime: 2021-01-07 13:41:31
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command4.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// JavaScript中的命令模式

//菜单对象
var Menu = {
  refresh: function () {
    console.log("刷新菜单");
  }
};

//子菜单
var SubMenu = {
  add: function () {
    console.log('增加子菜单');
  },

  del: function () {
    console.log('删除子菜单');
  }
};
//事件绑定函数
function addEvent(dom, fn, Capture) {
  dom.addEventListener("click", fn, !!Capture);
};
var btn = document.querySelectorAll("button");

addEvent(btn[0], Menu.refresh);
addEvent(btn[1], SubMenu.add);
addEvent(btn[2], SubMenu.del);