/*
 * @Author: junchao
 * @Date: 2021-01-05 15:05:05
 * @LastEditTime: 2021-01-05 16:05:46
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
// Command接口声明用于执行命令的方法。
interface Command {
  execute(): void;
}

//  有些命令可以自己执行简单的操作。
class SimpleCommand implements Command {
  private payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}


// 但是，某些命令可以将更复杂的操作委托给其他对象(被称为接收者)
class ComplexCommand implements Command {
  private receiver: Receiver;
  // 启动接收方方法所需的上下文数据。
  private a: string;
  private b: string;
  // 通过构造函数，复杂的命令可以接受一个或几个接收器对象
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  // 命令可以委托给接收方的任何方法。
  public execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}
// Receiver类包含一些重要的业务逻辑。他们知道如何执行与执行请求相关的各种操作。任何类都可以充当接收者。

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }
  public doSomethingElse(b: string): void {
    console.log(`Receiver: Working on (${b}.)`);
  }
}

// Invoker（调用程序）与一个或多个命令关联。 它向命令发送请求。
class Invoker {
  private onStart: Command;
  private onFinish: Command;
  // 初始化命令
  public setOnStart(command: Command): void {
    this.onStart = command;
  }
  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }
  // 调用者不依赖于具体的命令或接收者类别。 调用方通过执行以下操作将请求间接传递给接收方命令。
  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if(this.isCommand(this.onFinish)){
      this.onFinish.execute();
    }
  }

  private isCommand(object): object is Command {
    return object.execute !== undefined;
  }

}

// 客户端代码可以使用任何命令对调用程序进行参数化。

const invoker = new Invoker();

invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();
