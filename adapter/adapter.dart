/*
 * @Author: junchao
 * @Date: 2020-12-10 16:17:54
 * @LastEditTime: 2020-12-10 16:52:16
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/adapter/adapter.dart
 * @可以输入预定的版权声明、个性签名、空行等
 */

class Cart {
  runOnHeightWay() {
    print("我是cart，我可以在公路上跑");
  }
}

class Target {
  runOnTrack() {
    print("我是target，我可以在铁轨上跑");
  }
}

// 类适配器实现
class Adapter1 extends Cart implements Target {
  @override
  runOnTrack() {
    // 在这里可以直接使用this调用cart中的方法，做一些操作
    this.runOnHeightWay();
    print("我是类适配器，我可以让cart在铁轨上跑");
  }
}

// 类适配器实现测试
// main(List<String> args) {
//   Adapter1 adapter1 = new Adapter1();
//   adapter1.runOnTrack();
// }

// 对象适配器实现
class Adapter2 implements Target {
  Cart cart;
  Adapter2(Cart cart) {
    this.cart = cart;
  }
  @override
  runOnTrack() {
    // 在这里可以通过cart.runOnHeightWay()来调用cart中的方法
    cart.runOnHeightWay();
    print("我是对象适配器，我可以让cart在铁轨上跑");
  }
}

// 对象适配器实现测试
main(List<String> args) {
  Adapter2 adapter2 = new Adapter2(new Cart());
  adapter2.runOnTrack();
}
