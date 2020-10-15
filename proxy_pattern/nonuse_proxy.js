// 不使用代理的预加载图片函数如下
var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  var img = new Image();
  img.onload = function () {
    imgNode.src = this.src;
    imgNode.style.width = '1000px';
  };
  return {
    setSrc: function (src) {
      imgNode.src = 'http://image.sowm.cn/j2AFzy.jpg';
      img.src = src;
    }
  }
})();

// 调用方式
myImage.setSrc("http://m.jusfoun.com/JusfounBackground/vendor/umeditor/net/upload/2016-06-01/c0c374d8-7337-4e17-940d-8813de52ba8b.jpg");
