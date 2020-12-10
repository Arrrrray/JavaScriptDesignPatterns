/*
 * @Author: junchao
 * @Date: 2020-11-12 14:47:39
 * @LastEditTime: 2020-11-12 15:36:12
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/singleton_pattern/index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


//  单例模式实现一个弹窗

class Person {
  name = this.name;
  age = this.age;
  level = this.level;
  hello() {
    console.log(this.name, this.age, this.level);
  }
}


class Singleton {

  constructor(name, age, level) {

    this.name = name;
    this.age = age;
    this.level = level;

    this.instance = new Person(this.name, this.age, this.level);

  }

  // 构造一个广为人知的接口，供用户对该类进行实例化

  static getInstance(name, age, level) {

    if (!this.instance) {

      this.instance = new Singleton(name, age, level);

    }

    return this.instance;

  }

}


let a = Singleton.getInstance('xiaoming', '24', 'p8');
let b = Singleton.getInstance('xiaofang', '23', 'p9');
console.log(a)
console.log(b)
// console.log(a === b);