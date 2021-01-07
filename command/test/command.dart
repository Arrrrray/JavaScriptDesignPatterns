/*
 * @Author: junchao
 * @Date: 2021-01-05 17:41:15
 * @LastEditTime: 2021-01-05 18:29:37
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command.dart
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 命令对象
class Command {
  final Receiver receiver = new Receiver();
  execute() {
    print("调用接收者对应接口执行");
    receiver.execute();
  }
}

// 接收者
class Receiver {
  execute() {
    print("接收者执行请求");
  }
}

// 发布者
class Invocker {
  final Command command = new Command();
  invoke() {
    print("发布者发布命令");
    command.execute();
  }
}

main(List<String> args) {
  // final Receiver receiver = new Receiver();
  // final Command command = new Command();
  final Invocker invocker = new Invocker();
  invocker.invoke();
}
