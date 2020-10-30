"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: junchao
 * @Date: 2020-10-29 15:39:16
 * @LastEditTime: 2020-10-29 17:15:45
 * @LastEditors: junchao
 * @Description: 代理模式实现图片懒加载
 * @FilePath: /JavaScriptDesignPatterns/proxy_pattern2/index2.js
 * @symbol_custom_string_obkoro1: 可以输入预定的版权声明、个性签名、空行等
 */
// 代理模式实现图片懒加载
// 图片类
var MyImage =
/*#__PURE__*/
function () {
  function MyImage() {
    _classCallCheck(this, MyImage);

    this.imageNode = new Image();
    document.body.appendChild(this.imageNode);
  }

  _createClass(MyImage, [{
    key: "set",
    value: function set(src) {
      console.log('src', src);
      this.imageNode.src = src;
      this.imageNode.style.width = "1000px";
    }
  }]);

  return MyImage;
}(); // 代理图片类


var ProxyImage =
/*#__PURE__*/
function () {
  // proxyImage = new Image();
  // imageSrc;
  function ProxyImage() {
    var _this = this;

    _classCallCheck(this, ProxyImage);

    this.myImage = new MyImage();
    this.img = new Image();

    this.img.onload = function () {
      _this.myImage.set(_this.imageSrc);
    }; // this.myImage = new MyImage();
    // this.myImage.set('http://image.sowm.cn/j2AFzy.jpg');
    // this.proxyImage.onload = () => {
    //   this.myImage.set(this.imageSrc);
    // };
    // this.myImage.src = src;
    // this.myImage.onload = () => {
    //   this.myImage.set(src);
    // }

  }

  _createClass(ProxyImage, [{
    key: "set",
    value: function set(src) {
      this.myImage.set('http://image.sowm.cn/j2AFzy.jpg');
      this.img.src = src; // this.imageSrc = src;
      // this.proxyImage.src = src;
      // let myImage = new MyImage();
      // this.myImage.onload=()=>{
      //   this.myImage.set(src);
      // }
      // myImage.set(src);
    }
  }]);

  return ProxyImage;
}(); // let myImage = new MyImage();
// myImage.set('http://image.sowm.cn/j2AFzy.jpg')


var proxyImage = new ProxyImage();
proxyImage.set('http://m.jusfoun.com/JusfounBackground/vendor/umeditor/net/upload/2016-06-01/c0c374d8-7337-4e17-940d-8813de52ba8b.jpg');