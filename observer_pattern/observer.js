// 创建一个观察者
let Observer = (function () {
  // 消息队列
  let _message = {};
  return {
    /**
     * 注册信息接口
     * @param {*} type 
     * @param {*} fn 
     */
    regist(type, fn) {
      // 如果此消息不存在，创建一个该消息类型
      if (typeof _message[type] === 'undefined') {
        // 将动作方法推入到该消息对应的动作执行队列中
        _message[type] = [fn];
      }
      // 如果此消息存在
      else {
        // 将动作方法推入到该消息对应的动作执行序列中
        _message[type].push(fn);
      }
    },
    /**
     * 发布消息接口
     */
    fire(type, args) {
      // 如果该消息没有被注册则返回
      if (!_message[type]) {
        return;
      }
      // 定义消息信息
      let events = {
        type,
        args: args || {},
      };
      // 遍历消息动作
      for (let i = 0, len = _message[type].length; i < len; i++) {
        // 一次执行注册的消息对应的多做序列
        _message[type][i].call(this, events);
      }
    },
    /**
     * 信息注销方法
     */
    remove(type, fn) {
      // 如果消息动作队列存在
      if (Array.isArray(_message[type])) {
        // 从最后一个动作遍历
        for (let i = _message[type].length - 1; i >= 0; i--) {
          // 如果存在该动作，则在消息动作序列中移除相应的动作
          _message[type][i] === fn && _message[type].splice(i, 1);
        }
      }
    },
  };
})();

// 测试
Observer.regist('test', function (e) {
  console.log(e.type, e.args);
});
Observer.fire('test', { msg: '参数测试' });

// 对象之间解耦
// 学生类
let Student = function (result) {
  let _this = this;
  this.result = result;
  this.say = function () {
    console.log(_this.result);
  };
};
Student.prototype.answer = function (question) {
  // 注册带参数问题
  Observer.regist(question, this.say);
};
Student.prototype.sleep = function (question) {
  console.log(`${this.result} ${question} 已被注销`);
  // 移除对老师问题的监听
  Observer.remove(question, this.say);
};

// 教师类
let Teacher = function () { };

Teacher.prototype.ask = function (question) {
  console.log('问题是: ' + question);
  // 发布提问消息
  Observer.fire(question);
};

// 学生实例
let student1 = new Student('学生 1 回答问题');
let student2 = new Student('学生 2 回答问题');
let student3 = new Student('学生 3 回答问题');
// 学生订阅（监听）老实的两个问题
student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');
// 学生3注销了一个问题
student3.sleep('简述观察者模式');
// 教师实例
let teacher = new Teacher();
console.log('----> 老师提问：');
teacher.ask('什么是设计模式');
teacher.ask('简述观察者模式');
