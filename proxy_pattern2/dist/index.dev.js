"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: junchao
 * @Date: 2020-10-29 14:26:13
 * @LastEditTime: 2020-10-29 15:13:26
 * @LastEditors: junchao
 * @Description: 代理模式学习2
 * @FilePath: /JavaScriptDesignPatterns/proxy_pattern2/index.js
 * @symbol_custom_string_obkoro1: 可以输入预定的版权声明、个性签名、空行等
 */
// 代理模式
// 创建鲜花类
var Flower =
/*#__PURE__*/
function () {
  function Flower() {
    _classCallCheck(this, Flower);
  }

  _createClass(Flower, [{
    key: "log",
    value: function log() {
      return '一朵美丽的鲜花';
    }
  }]);

  return Flower;
}(); // 创建小明类


var XiaoMing =
/*#__PURE__*/
function () {
  function XiaoMing() {
    _classCallCheck(this, XiaoMing);
  }

  _createClass(XiaoMing, [{
    key: "sendFlower",
    value: function sendFlower(target) {
      var flower = new Flower();
      target.receiveFlower(flower);
    }
  }]);

  return XiaoMing;
}(); // 创建代理类


var ProxyGoddess =
/*#__PURE__*/
function () {
  function ProxyGoddess() {
    _classCallCheck(this, ProxyGoddess);
  }

  _createClass(ProxyGoddess, [{
    key: "receiveFlower",
    value: function receiveFlower(flower) {
      console.log('我是中间代理，我将花转交给女神');
      var goddess = new Goddess(); // goddess.receiveFlower(flower);

      goddess.listenGoddessMood(function () {
        console.log('女神心情不好，需要一会再送给女神');
        goddess.receiveFlower(flower);
      });
    }
  }]);

  return ProxyGoddess;
}(); // 创建女神类


var Goddess =
/*#__PURE__*/
function () {
  function Goddess() {
    _classCallCheck(this, Goddess);
  }

  _createClass(Goddess, [{
    key: "receiveFlower",
    value: function receiveFlower(flower) {
      console.log('我是女神，我收到了：' + flower.log());
    } // 监听女神心情

  }, {
    key: "listenGoddessMood",
    value: function listenGoddessMood(fn) {
      setTimeout(function () {
        fn && fn();
      }, 3000);
    }
  }]);

  return Goddess;
}(); // 小明送花


var xiaoming = new XiaoMing();
var poxyGoddess = new ProxyGoddess();
xiaoming.sendFlower(poxyGoddess);