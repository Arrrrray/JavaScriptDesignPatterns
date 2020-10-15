// 使用代理模式来编写预加载图片的代码如下：
var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
      imgNode.style.width = '1000px';
    }
  }
})();
// 代理模式
var ProxyImage = (function () {
  var img = new Image();
  img.onload = function () {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImage.setSrc('http://image.sowm.cn/j2AFzy.jpg');
      img.src = src;
    }
  }
})();
// 调用方式
ProxyImage.setSrc("http://m.jusfoun.com/JusfounBackground/vendor/umeditor/net/upload/2016-06-01/c0c374d8-7337-4e17-940d-8813de52ba8b.jpg");

