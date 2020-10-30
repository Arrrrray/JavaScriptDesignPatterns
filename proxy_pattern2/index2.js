/*
 * @Author: junchao
 * @Date: 2020-10-29 15:39:16
 * @LastEditTime: 2020-10-29 17:16:41
 * @LastEditors: junchao
 * @Description: 代理模式实现图片懒加载
 * @FilePath: /JavaScriptDesignPatterns/proxy_pattern2/index2.js
 * @symbol_custom_string_obkoro1: 可以输入预定的版权声明、个性签名、空行等
 */
// 代理模式实现图片懒加载

// 图片类
class MyImage {
  constructor() {
    this.imageNode = new Image();
    document.body.appendChild(this.imageNode);
  }

  set(src) {
    this.imageNode.src = src;
    this.imageNode.style.width = "1000px";
  }
}
// 代理图片类
class ProxyImage {
  proxyImage = new Image();
  imageSrc;
  constructor() {
    // this.myImage = new MyImage();

    // this.img = new Image();
    // this.img.onload = ()=>{
    //   this.myImage.set(this.imageSrc);
    // }


    this.myImage = new MyImage();
    this.myImage.set('http://image.sowm.cn/j2AFzy.jpg');
    this.proxyImage.onload = () => {
      this.myImage.set(this.imageSrc);
    };
    // this.myImage.src = src;
    // this.myImage.onload = () => {
    //   this.myImage.set(src);
    // }
    
  }

  set(src) {
    // this.myImage.set('http://image.sowm.cn/j2AFzy.jpg');
    // this.img.src = src;
    
    
    this.imageSrc = src;
    this.proxyImage.src = src;
    // let myImage = new MyImage();

    // this.myImage.onload=()=>{
    //   this.myImage.set(src);
    // }
    // myImage.set(src);
  }

}

// let myImage = new MyImage();
// myImage.set('http://image.sowm.cn/j2AFzy.jpg')
let proxyImage = new ProxyImage();
proxyImage.set('http://m.jusfoun.com/JusfounBackground/vendor/umeditor/net/upload/2016-06-01/c0c374d8-7337-4e17-940d-8813de52ba8b.jpg');

