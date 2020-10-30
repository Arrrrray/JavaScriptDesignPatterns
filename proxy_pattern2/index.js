/*
 * @Author: junchao
 * @Date: 2020-10-29 14:26:13
 * @LastEditTime: 2020-10-29 15:38:55
 * @LastEditors: junchao
 * @Description: 代理模式学习2
 * @FilePath: /JavaScriptDesignPatterns/proxy_pattern2/index.js
 * @symbol_custom_string_obkoro1: 可以输入预定的版权声明、个性签名、空行等
 */


// 代理模式

// 创建鲜花类
class Flower {
  log() {
    return '一朵美丽的鲜花';
  }
}
// 创建小明类
class XiaoMing {
  sendFlower(target) {
    // let flower = new Flower();
    // target.receiveFlower(flower);
    target.receiveFlower();
  }
}
// 创建代理类
class ProxyGoddess {
  goddess;
  constructor() {
    // 初始化代理的时候，判断是否存在女神，如果不存在，重新创建一个
    if (!this.goddess) {
      this.goddess = new Goddess('小芳');
    }
  }
  receiveFlower() {
    console.log(`我是中间代理，我将花转交给女神${this.goddess.name}`);
    // let goddess = new Goddess();
    // goddess.receiveFlower(flower);
    this.goddess.listenGoddessMood(() => {
      // console.log(`女神${this.goddess.name}心情不好，需要一会再送给女神${this.goddess.name}`);
      // 小明直接给了代理买花的钱，等女神心情好了再买花送给女神，避免浪费，毕竟鲜花也是很贵的
      let flower = new Flower();
      this.goddess.receiveFlower(flower);
    })
  }
}
// 创建女神类
class Goddess {
  constructor(name) {
    this.name = name;
  }
  receiveFlower(flower) {
    console.log(`我是女神${this.name} ，我收到了：` + flower.log());
  }
  // 监听女神心情
  listenGoddessMood(fn) {
    console.log(`女神${this.name}心情不好，需要一会再送给女神${this.name}`);
    // 3000ms之后女神心情变好了，给女神送花
    setTimeout(() => {
      fn && fn();
    }, 3000);
  }
}

// 小明送花
let xiaoMing = new XiaoMing();
let proxyGoddess = new ProxyGoddess();
xiaoMing.sendFlower(proxyGoddess);