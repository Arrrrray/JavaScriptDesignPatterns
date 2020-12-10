"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: junchao
 * @Date: 2020-11-12 14:47:39
 * @LastEditTime: 2020-11-12 14:51:40
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/singleton_pattern/index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
//  单例模式实现一个弹窗
var Singleton =
/*#__PURE__*/
function () {
  function Singleton(name) {
    _classCallCheck(this, Singleton);

    this.name = name;
    this.instance = null;
  } // 构造一个广为人知的接口，供用户对该类进行实例化


  _createClass(Singleton, null, [{
    key: "getInstance",
    value: function getInstance(name) {
      if (!this.instance) {
        this.instance = new Singleton(name);
      }

      return this.instance;
    }
  }]);

  return Singleton;
}();

var a = new Singleton().getInstance;
a();