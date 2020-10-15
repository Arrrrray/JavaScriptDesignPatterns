/*
 * @Author: junchao
 * @Date: 2020-10-15 14:48:09
 * @LastEditTime: 2020-10-15 16:42:19
 * @LastEditors: junchao
 * @Description: 使用策略模式实现表单验证
 * @FilePath: /JavaScriptDesignPatterns/strategy_pattern/strategy2.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 使用策略模式实现以下功能
// 1. 用户名不能为空
// 2. 密码长度不能少于6位
// 3. 手机号必须符合格式
// 
// 进阶练习
// 1. 用户名不能为空，且长度不能小于3位
// 2. 密码长度在6到18位之间

class InputCheck {
  constructor(type, inputValue) {
    this.type = type;
    this.inputValue = inputValue;
    this.checkoutOptions = {
      // 检查输入是否为空
      isEmpty(inputValue) {
        if (inputValue == '') {
          console.log('输入的值为空');
          return false;
        } else {
          console.log('校验通过，输入的值不为空')
          return true;
        }
      },

      // 检查输入的程度不能少于6位
      isShort(inputValue) {
        if (inputValue.length < 6) {
          console.log('输入的值长度不能小于6位');
          return false;
        } else {
          console.log('校验通过，输入的值长度不小于6位')
          return true;
        }
      },

      // 检查是否是正确的手机号
      isPhone(inputValue) {
        const isPhoneRegexp = /^1[3-9]\d{9}$/;
        if (isPhoneRegexp.test(inputValue)) {
          console.log('校验通过，输入的值是一个正确的手机号')
          return true;
        } else {
          console.log('输入的值不是一个手机号');
          return false;
        }
      },
    }
  }

  check(type, inputValue) {
    inputValue = inputValue.replace(/^\s+|\s+$/g, '');
    return this.checkoutOptions[type] ? this.checkoutOptions[type](inputValue) : '没有此类型的检查，请通过addCheck添加';
  }
  addCheck(type, fn) {
    this.checkoutOptions[type] = fn;
  }
}

const newCheck = new InputCheck()

// 添加输入不能为空且长度不小于3的校验
newCheck.addCheck('isEmptyAndShort', (inputValue) => {
  if (newCheck.check('isEmpty', inputValue) && inputValue.length >= 3) {
    console.log('校验通过，输入的值不为空且长度不小于3')
    return true;
  } else {
    console.log('输入的值为空或长度小于3')
    return false;
  }
})

// 添加输入长度在6-18位之间的校验
newCheck.addCheck('isNoLonger', (inputValue) => {
  if (6 <= inputValue.length && inputValue.length <= 18) {
    console.log('校验通过，输入的值长度在6-18位之间')
    return true;
  } else {
    console.log('输入的值长度小于6位或大于18位')
    return false;
  }
})

newCheck.check('isEmpty', '');
newCheck.check('isEmpty', '123');
newCheck.check('isShort', '123');
newCheck.check('isShort', '123123');
newCheck.check('isPhone', '123123');
newCheck.check('isPhone', '12312312312');
newCheck.check('isPhone', '13312312312');
newCheck.check('isEmptyAndShort', '12');
newCheck.check('isEmptyAndShort', '13312312312');
newCheck.check('isNoLonger', '123');
newCheck.check('isNoLonger', '13312312312');
newCheck.check('isNoLonger', '133123123123123123123');



