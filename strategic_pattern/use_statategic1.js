// 使用策略模式进行价格计算

// 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。
// 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。
// 策略模式中的代码可以复用。

// 价格策略对象
let PriceStrategy = function () {
  // 内部算法对象
  let strategy = {
    // 100 返 30
    return30(price) {
      return +price + parseInt(price / 100) * 30;
    },
    // 100 返 50
    return50(price) {
      return +price + parseInt(price / 100) * 50;
    },
    // 9折
    percent90(price) {
      return price * 100 * 90 / 10000;
    },
    // 8 折
    percent80(price) {
      return price * 100 * 80 / 10000;
    },
    // 5 折
    percent50(price) {
      return price * 100 * 50 / 10000;
    },
  };

  // 策略算法调用接口
  return function (algorithm, price) {
    // 如果算法存在，则调用算法，否则返回false
    return strategy[algorithm] && strategy[algorithm](price);
  };
}();

// 使用
let price = PriceStrategy('percent50', '350');
console.log(price);