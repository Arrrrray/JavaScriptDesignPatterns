<!--
 * @Author: junchao
 * @Date: 2021-01-05 12:02:59
 * @LastEditTime: 2021-01-06 10:57:21
 * @LastEditors: junchao
 * @Description:
 * @FilePath: /JavaScriptDesignPatterns/command/command_pattern.md
 * @可以输入预定的版权声明、个性签名、空行等
-->

# 命令模式

## 什么是命令模式

命令模式是将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。

## 命令模式可以用来解决什么问题

在软件系统中，行为请求者与行为实现者通常是一种紧耦合的关系，但某些场合，比如需要对行为进行记录、撤销或重做、事务等处理时，这种无法抵御变化的紧耦合的设计就不太合适。

## 命令模式的结构

### 基础结构

- 发布者 **invoker**（发出命令，调用命令对象，不知道如何执行与谁执行）；
- 接收者 **receiver** (提供对应接口处理请求，不知道谁发起请求）；
- 命令对象 **command**（接收命令，调用接收者对应接口处理发布者的请求）。


### 完整结构

**Command**:定义命令的接口，声明执行的方法。

**ConcreteCommand**:命令接口实现对象，是"虚"的实现。
通常会持有接收者，并调用接收者的功能来完成命令要执行的操作。

**Receiver**:接收者，真正执行命令的对象。
任何类都可能成为一个接收者，只要它能够实现命令要求实现的相应功能。

**Invoker**:要求命令对象执行请求，通常会持有命令对象，可以持有很多的命令对象。
这个是客户端真正触发命令并要求命令执行相应操作的地方，也就是说相当于使用命令对象的入口。

**Client**:创建具体的命令对象，并且设置命令对象的接收者。
注意这个不是我们常规意义上的客户端，而是在组装命令对象和接收者，或许，把这个 Client 称为装配者会更好理解，因为真正使用命令的客户端是从 Invoker 来触发执行。

命令模式不一定具备上面的所有结构，简单的命令模式可以只有命令的发布者和命令的接收者，这种简单命令模式中，接受者和执行者是同一个对象。比如：小明的妈妈告诉小明说：“今天中午妈妈会很忙，没时间出去买菜。你放学回来的时候，顺便帮妈妈把菜买回来”，在这个例子中，命令的发布者是小明的妈妈，小明是命令的接收者和执行者：

```javascript
//发布命令者
var Command = function(receiver){
    this.receiver = receiver;
};

Command.prototype.execute = function(){
    this.receiver.action();
};

//命令的执行者和接受者
var Receiver = function(name){
    this.name = name;
};

Receiver.prototype.action = function(){
    alert(this.name + "中午放学后顺便把菜买了！");
};

var xiaoming = new Receiver("小明");
var xiaomingmama = new Command(xiaoming);

xiaomingmama.execute();
```

## 命令模式的优缺点：

优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。

缺点：使用命令模式可能会导致某些系统有过多的具体命令类。

## 参考文档

[JavaScript 设计模式之命令模式](https://cloud.tencent.com/developer/article/1498286?from=information.detail.javascript%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F)




