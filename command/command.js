/*
 * @Author: junchao
 * @Date: 2021-01-05 16:33:53
 * @LastEditTime: 2021-01-06 11:01:25
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


// 接收者类
class Receiver {
  execute(action) {
    console.log(`接收者执行命令:${action}`)
  }
}

// 命令对象
class Command {  
  constructor(receiver) {
      this.receiver = receiver
  }
  execute (action) {    
      console.log(`命令对象接收到命令:${action}`);
      this.receiver.execute(action)
  }
}


// 发布者
class Invoker {   
  constructor(command) {
      this.command = command
  }
  invoke(action) {   
      console.log(`发布者发布命令:${action}`)
      this.command.execute(action)
  }
}

// 仓库
const warehouse = new Receiver();   
// 订单    
const order = new Command(warehouse);  
// 客户
const client = new Invoker(order);      
client.invoke('生产一张书桌')