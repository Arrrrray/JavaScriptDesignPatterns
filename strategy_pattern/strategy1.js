/*
 * @Author: junchao
 * @Date: 2020-10-15 14:48:09
 * @LastEditTime: 2020-10-15 16:02:17
 * @LastEditors: junchao
 * @Description: 使用策略模式实现表单验证
 * @FilePath: /JavaScriptDesignPatterns/strategy_model/strategy1.js
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


const InputCheck = (() => {
  const checkoutOptions = {
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
  };
  return {
    check(type, inputValue) {
      inputValue = inputValue.replace(/^\s+|\s+$/g, '');
      return checkoutOptions[type] ? checkoutOptions[type](inputValue) : '没有此类型的检查，请通过addCheck添加';
    },
    addCheck(type, fn) {
      checkoutOptions[type] = fn;
    }
  };
})();

// 添加输入不能为空且长度不小于3的校验
InputCheck.addCheck('isEmptyAndShort', (inputValue) => {
  if (InputCheck.check('isEmpty', inputValue) && inputValue.length >= 3) {
    console.log('校验通过，输入的值不为空且长度不小于3')
    return true;
  } else {
    console.log('输入的值为空或长度小于3')
    return false;
  }
})

// 添加输入长度在6-18位之间的校验
InputCheck.addCheck('isNoLonger', (inputValue) => {
  if (6 <= inputValue.length <= 18) {
    console.log('校验通过，输入的值长度在6-18位之间')
    return true;
  } else {
    console.log('输入的值长度小于6位或大于18位')
    return false;
  }
})

InputCheck.check('isEmpty', '');
InputCheck.check('isEmpty', '123');
InputCheck.check('isShort', '123');
InputCheck.check('isShort', '123123');
InputCheck.check('isPhone', '123123');
InputCheck.check('isPhone', '12312312312');
InputCheck.check('isPhone', '13312312312');
InputCheck.check('isEmptyAndShort', '12');
InputCheck.check('isEmptyAndShort', '13312312312');
InputCheck.check('isNoLonger', '123');
InputCheck.check('isNoLonger', '13312312312');
InputCheck.check('isNoLonger', '133123123123123123123');



