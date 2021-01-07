/*
 * @Author: junchao
 * @Date: 2021-01-05 12:09:54
 * @LastEditTime: 2021-01-07 15:05:58
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/with_command.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 烧烤店的实现
// Receiver 接收者类 厨师，拥有烤羊肉串，烤鸡翅等能力
class Cooker {
  execute(action) {
    console.log(`厨房收到订单: 开始${action}`)
    switch (action) {
      case "烤羊肉串":
        this.bakeMutton();
        break;

      case "烤鸡翅":
        this.bakeChickenWing();
        break;

      default:
        console.log(`厨房没有${action}了，请点其他的菜`);
        break;
    }
  }
  //  烤羊肉串
  bakeMutton() {
    setTimeout(() => {
      console.log('羊肉串烤好了，可以给客人上菜了');
    }, 500);
  }
  //  烤鸡翅
  bakeChickenWing() {
    setTimeout(() => {
      console.log('鸡翅烤好了，可以给客人上菜了');
    }, 1000);
  }
}


// command 命令对象类
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute(action) {
    this.receiver.execute(action);
  }
}

// ConcreteCommand
// 烤羊肉串的命令
class BakeMuttonCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  execute() {
    this.receiver.execute('烤羊肉串');
  }
}

// 烤牛肉串的命令
class BakeBeefCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  execute() {
    this.receiver.execute('烤牛肉串');
  }
}

// 烤鸡翅的命令
class BakeChickenWingCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  execute() {
    this.receiver.execute('烤鸡翅');
  }
}



// Invoker 发布者 服务员
class Invoker {
  constructor() {
    this.orders = [];
  }
  // 添加菜品
  setOrder(type, command) {
    this.orders.push(command);
    console.log(`${Date.now()} 下单 ${type}`);
  }
  // 取消菜品
  cancelOrder(type, command) {
    let index = this.orders.indexOf(command);
    this.orders.splice(index, 1);
    console.log(`${Date.now()} 取消下单 ${type}`)
  }

  // 向后厨下单
  notify() {
    console.log('向后厨下单');
    this.orders.forEach(element => {
      element.execute();
    });
  }
}



let cooker = new Cooker();
let bakeMuttonCommand = new BakeMuttonCommand(cooker);
let bakeBeefCommand = new BakeBeefCommand(cooker);
let bakeChickenWingCommand = new BakeChickenWingCommand(cooker);

let waiter = new Invoker();

waiter.setOrder('烤羊肉串', bakeMuttonCommand);
waiter.setOrder('烤羊肉串', bakeMuttonCommand);
waiter.setOrder('烤牛肉串', bakeBeefCommand);
waiter.setOrder('烤鸡翅', bakeChickenWingCommand);
waiter.cancelOrder('烤羊肉串', bakeMuttonCommand);
// setTimeout(() => {
  waiter.notify();
// }, 1000);


