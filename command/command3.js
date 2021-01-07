/*
 * @Author: junchao
 * @Date: 2021-01-06 15:50:01
 * @LastEditTime: 2021-01-06 15:51:08
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/command/command3.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 宏命令对象
class MacroCommand {
  constructor() {
    this.commandList = [];  // 缓存子命令对象
  }
  add(command) {            // 向缓存中添加子命令
    this.commandList.push(command);
  }
  execute() {               // 对外命令执行接口
    // 遍历自命令对象并执行其 execute 方法
    for (const command of this.commandList) {
      command.execute();
    }
  }
}

const openWechat = {  // 命令对象
  execute: () => {
    console.log('打开微信');
  }
};

const openChrome = {  // 命令对象
  execute: () => {
    console.log('打开Chrome');
  }
};

const openEmail = {   // 命令对象
  execute: () => {
    console.log('打开Email');
  }
}

const macroCommand = new MacroCommand();

macroCommand.add(openWechat); // 宏命令中添加子命令
macroCommand.add(openChrome); // 宏命令中添加子命令
macroCommand.add(openEmail);  // 宏命令中添加子命令

macroCommand.execute();       // 执行宏命令
/* 输出：
打开微信
打开Chrome
打开Email
*/