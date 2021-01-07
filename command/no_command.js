/*
 * @Author: junchao
 * @Date: 2021-01-05 12:04:13
 * @LastEditTime: 2021-01-05 13:04:13
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/no_command.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 路边烧烤摊的实现
class Cooker {
  //  烤羊肉串
  bakeMutton() {
    console.log("烤羊肉串");
  }
  //  烤鸡翅
  bakeChickenWing() {
    console.log("烤鸡翅");
  }
}

// 客户端实现
let boy = new Cooker();

boy.bakeMutton();
boy.bakeMutton();
boy.bakeChickenWing();
boy.bakeMutton();
boy.bakeMutton();
boy.bakeChickenWing();
boy.bakeMutton();
boy.bakeMutton();
boy.bakeMutton();
boy.bakeMutton();
boy.bakeChickenWing();

