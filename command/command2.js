/*
 * @Author: junchao
 * @Date: 2021-01-06 12:18:31
 * @LastEditTime: 2021-01-07 13:40:15
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


// 接收者类
class Receiver {
  execute(action) {
    console.log(`接收者执行命令: 生产${action}`);
    switch (action) {
      case "书桌":
        this.outputDesk();
        break;
      case "椅子":
        this.outputChair();
        break;

      default:
        console.log(`工厂没有生产${action}的能力，请确认订单`);
        break;
    }
  }
  // 生产书桌的方法
  outputDesk() {
    setTimeout(() => {
      console.log('生产了一张书桌');
      console.log('书桌已经生产好了，可以交给客户了');
    }, 1000);
  }
  // 生产椅子的方法
  outputChair() {
    setTimeout(() => {
      console.log('生产了一把椅子');
      console.log('椅子已经生产好了，可以交给客户了');
    }, 1000);

  }
}

// 命令对象
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute(action) {
    console.log(`命令对象接收到命令:${action}`);
    this.receiver.execute(action)
  }
}

class DeskCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  execute() {
    console.log(`接到一张书桌的订单，给工厂下命令生产一张书桌`);
    this.receiver.execute('书桌');
  }
}
class ChairCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }
  execute() {
    console.log(`接到一把椅子的订单，给工厂下命令生产一把椅子`);
    this.receiver.execute('椅子');
  }
}


// 发布者
class Invoker {
  constructor() {
    this.orderList = [];
  }
  // 下订单
  setOrder(orderType, order) {
    console.log(`接到一个订单:${orderType}`)
    this.orderList.push(order);
  }

  // 取消订单
  cancelOrder(orderType, order) {
    let index = this.orderList.indexOf(order);
    this.orderList.splice(index, 1);
    console.log(`取消一个订单:${orderType}`);
  }
  // 发布命令
  invoke() {
    console.log(`发布者发布命令,给工厂下订单`)
    this.orderList.forEach((item) => { item.execute(); });
  }
}

// 仓库
const warehouse = new Receiver();
// 订单    
const desk = new DeskCommand(warehouse);
const chair = new ChairCommand(warehouse);
// 客户
const client = new Invoker();
client.setOrder("书桌", desk);
client.setOrder("书桌", desk);
client.setOrder("书桌", desk);
client.setOrder("书桌", desk);
client.setOrder("椅子", chair);
client.setOrder("椅子", chair);
client.setOrder("椅子", chair);
client.setOrder("椅子", chair);
client.setOrder("椅子", chair);
client.setOrder("椅子", chair);
client.cancelOrder("书桌", desk);
setTimeout(() => {
  client.invoke();
}, 1000);
